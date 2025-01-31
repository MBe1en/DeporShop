import axios from "./axios";

export const getCategoriesRequest = () => axios.get(`category/getAll`);