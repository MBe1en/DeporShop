import axios from "./axios";

export const getCartRequest = () => axios.get(`cart/get`);

export const getProductRequest = (idProduct) =>
  axios.get(`cart/${idProduct}`);

// export const createProductRequest = (cart) =>
//   axios.post(`cart/create`, cart);

// export const updateProductRequest = (cart) =>
//   axios.put(`cart/${cart.id}`, cart);

// export const deleteProductRequest = (idProduct) =>
//   axios.delete(`cart/${idProduct}`);



