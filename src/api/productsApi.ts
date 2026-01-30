import { http } from "./http";
import type { PaginatedResponse, Product } from "../types/product";

export async function getProducts(params: {
  page: number;
  pageSize: number;
  search?: string;
}) {
  const { page, pageSize, search } = params;

  const res = await http.get<PaginatedResponse<Product>>("/products/", {
    params: {
      page,
      page_size: pageSize,
      ...(search ? { search } : {}),
    },
  });

  return res.data;
}