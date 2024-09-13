import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createAccessToken } from "../utils/createAccessToken.js";
import jwt from "jsonwebtoken";

export const getAll = async (req, res) => {
  try {
    console.log(req.user);
    const users = await User.find();
    if (users.length == 0) {
      return res.status(404).json({ message: `There are no users` });
      // return res.status(404).json([`There are no users`] );
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
    // res.status(500).json(["Internal server error"]);
  }
};

export const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: `User whith email "${email}" already exists` });
      // .json([`User whith email "${email}" already exists`] );
    }
    const savedUser = await newUser.save();

    const payload = {
      userId: savedUser._id,
      userEmail: savedUser.email,
    };

    const token = await createAccessToken(payload);
    console.log("token: " + token);
    const { password, ...rest } = savedUser;
    res.cookie("token", token, {});
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
    // res.status(500).json(["Internal server error"] );
  }
};

export const login = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email });
    if (!userFound) {
      return res.status(400).json({ message: "Email or password incorrect" });
      // return res.status(400).json(["Email or password incorrect"] );
    }

    if (bcrypt.compareSync(req.body.password, userFound.password)) {
      const payload = {
        userId: userFound._id,
        userEmail: userFound.email,
      };

      const token = await createAccessToken(payload);
      res.cookie("token", token);
      res.status(200).json({ message: "User logged" });
      // res.status(200).json( ["User logged"] );
    } else {
      res.status(400).json({ message: "Email or password incorrect" });
      // return res.status(400).json(["Email or password incorrect"] );
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
    // res.status(500).json(["Internal server error"] );
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);

  // const USERTOKENSECRET = process.env.USER_TOKEN_SECRET;
  if (!token) return res.status(401).json({ message: `Unauthorized 1` });

  jwt.verify(token, process.env.USER_TOKEN_SECRET, async(err, user) => {
    console.log( user);
      if (err) return res.status(401).json({ message: `Unauthorized 2` });

      const userFound = await User.findById(user.userId);
      console.log('userfound' + userFound);
      if (!userFound) return res.status(401).json({ message: `Unauthorized 3` });

      return res.json({
        _id: userFound._id,
        name: userFound.name,
        email: userFound.email,
      })
  })
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const getUser = async (req, res) => {
  console.log(req.user);

  const userFound = await User.findById(req.user.userId);
  if (!userFound) return res.status(400).json({ message: "User not found" });
  // return res.status(400).json(["User not found"] );
  console.log(userFound.name);
  return res.json({
    id: userFound._id,
    name: userFound.name,
    lastName: userFound.lastName,
    email: userFound.email,
    address: userFound.address,
    city: userFound.city,
    province: userFound.province,
  });
};

export const updateUser = async (req, res) => {
  try {
    console.log(req);
    const id = req.user.userId;
    console.log(id);
    const userExist = await User.findOne({ _id: id });
    console.log(userExist);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const update = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(update);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    await User.findOneAndDelete({ _id: id });
    res.status(201).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};
