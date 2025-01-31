import axios from "./axios";

export const getProductsRequest = () => axios.get(`product/getAll`);

export const getProductsFilteredRequest = (query) => axios.get(`product/get?${query}`);

// export const getProductFilteredRequest = () => axios.get(`product/search`);

export const getProductRequest = (idProduct) =>
  axios.get(`product/${idProduct}`);

export const createProductRequest = (product) =>
  axios.post(`product/create`, product);

export const updateProductRequest = (product) =>
  axios.put(`product/${product.id}`, product);

export const deleteProductRequest = (idProduct) =>
  axios.delete(`product/${idProduct}`);



