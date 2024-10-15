import axios from "./axios";

export const registerRequest = (user) => axios.post(`user/register`, user);
export const loginRequest = (user) => axios.post(`user/login`, user);
export const verifyTokenRequest = async () => axios.get(`user/verify`);
export const getUserRequest = async (id) => axios.get(`user/update/${id}`);
export const updateUserRequest = async (user) => axios.put(`user/update/${user.id}`, user);

// const API = "http://localhost:4000/api/user";

// export const registerRequest = user  => axios.post(`${API}/register`, user);
// export const loginRequest = user  => axios.post(`${API}/login`, user);
