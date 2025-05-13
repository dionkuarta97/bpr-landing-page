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
  data: T;
}

const useGetDetailProduk = ({ id }: { id: number }) => {
  const getProduk = async (): Promise<metadata<Produk>> => {
    const response = await api.get(`/product/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["produk", id],
    queryFn: getProduk,
  });
  return { data, isLoading, error };
};

export default useGetDetailProduk;
