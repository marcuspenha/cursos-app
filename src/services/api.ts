import axios from "axios";
import type { DummyProduct } from "../types/course";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export async function getCursos(): Promise<DummyProduct[]> {
  const resposta = await api.get("/products");
  return resposta.data.products as DummyProduct[];
}
