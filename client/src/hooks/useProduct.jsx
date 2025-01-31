import { useQuery } from "@tanstack/react-query";
import {
  getProductsRequest,
  getProductsFilteredRequest,
} from "../api/products";

// const key = "products";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsRequest,
  });
};

export const useGetFilteredProducts = (query) => {
  return useQuery({
    queryKey: ['productfiltered', query],
    queryFn:  () => getProductsFilteredRequest(query),
    staleTime: 5 * 60 * 1000,
  });
};
