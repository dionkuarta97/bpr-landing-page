import api from "../axios";
import { useQuery } from "@tanstack/react-query";
export interface Produk {
  id: number;
  judul: string;
  deskripsi: string;
  content: string;
  foto: string;
  tipe: string;
  created_at: string;
  updated_at: string;
}

export interface metadata<T> {
  data: T[];
  current_page: number;
  total: number;
  per_page: number;
  total_page: number;
}

const useGetProduk = ({
  page,
  perPage,
  tipe,
}: {
  page?: number;
  perPage?: number;
  tipe?: string;
}) => {
  const getProduk = async (): Promise<metadata<Produk>> => {
    const response = await api.get("/product", {
      params: {
        page,
        limit: perPage,
        tipe,
      },
    });
    return response.data.metadata;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["produk", page, perPage, tipe],
    queryFn: getProduk,
  });
  return { data, isLoading, error };
};

export default useGetProduk;
