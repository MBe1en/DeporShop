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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authErrors, setAuthErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      // setIsAuthenticated(false);
      console.log("Error: " + error.response.data.message);
      setAuthErrors(error.response.data.message);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      // setIsAuthenticated(false);
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
      setUser(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (user) => {
    try {
      const res = await updateUserRequest(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (authErrors.length > 0) {
      const timer = setTimeout(() => {
        console.log("2" + authErrors);
        setAuthErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [authErrors]);

  useEffect(() => {
    // async function checkLogin() {
      const checkLogin = async() => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        console.log(res.data);
        // setUserId(res.data._id);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };

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
