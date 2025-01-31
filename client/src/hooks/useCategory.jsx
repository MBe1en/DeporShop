import { useQuery } from "@tanstack/react-query";
import { getCategoriesRequest } from "../api/categories";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesRequest,
  });
};
