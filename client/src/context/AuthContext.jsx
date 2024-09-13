import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  getUserRequest,
  updateUserRequest,
  verifyTokenRequest,
} from "../api/user.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an authProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [authErrors, setAuthErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log("Respuesta:", res.data);
      if (res.status === 200) {
        setUser(res.data);
        setisAuthenticated(true);
      }
    } catch (error) {
      setisAuthenticated(false);
      console.log("Error: " + error.response.data.message);
      setAuthErrors(error.response.data.message);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log("Respuesta:", res.data);
      if (res.status === 200) {
        setUser(res.data);
        setisAuthenticated(true);
      }
    } catch (error) {
      setisAuthenticated(false);
      console.log("Error: " + error.response.data.message);
      setAuthErrors(error.response.data.message);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  const getUser = async (id) => {
    try {
      const res = await getUserRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (user) => {
    try {
      // console.log(user);

      const res = await updateUserRequest(user);
      console.log("res");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authErrors.length > 0) {
      const timer = setTimeout(() => {
        console.log("2" + authErrors);
        setAuthErrors([]);
      }, 50000);
      return () => clearTimeout(timer);
    }
  }, [authErrors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      console.log("cookie checkLogin");
      console.log(cookies);
      if (!cookies.token) {
        setisAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log("res");
        console.log(res);
        if (!res.data) return setisAuthenticated(false);
        setisAuthenticated(true);
        setUser(res.data);
        setUserId(res.data._id);
        setLoading(false);
        console.log("userId");
        console.log(userId);
      } catch (error) {
        setisAuthenticated(false);
        setLoading(false);
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        getUser,
        updateUser,
        user,
        isAuthenticated,
        authErrors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
