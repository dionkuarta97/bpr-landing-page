import api from "../axios";
import { useQuery } from "@tanstack/react-query";
export interface Publikasi {
  id: number;
  judul: string;
  deskripsi: string;
  content: string | null;
  foto: string;
  tipe: string;
  pdfPath: string | null;
  created_at: string;
  updated_at: string;
}

export interface metadata<T> {
  data: T;
}

const useGetDetailProduk = ({ id }: { id: number }) => {
  const getPublikasi = async (): Promise<metadata<Publikasi>> => {
    const response = await api.get(`/publikasi/${id}`);
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["publikasi", id],
    queryFn: getPublikasi,
  });
  return { data, isLoading, error };
};

export default useGetDetailProduk;
