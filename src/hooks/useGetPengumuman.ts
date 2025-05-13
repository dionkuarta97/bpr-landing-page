import api from "../axios";
import { useQuery } from "@tanstack/react-query";
export interface Pengumuman {
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
  data: T[];
  current_page: number;
  total: number;
  per_page: number;
  total_page: number;
}

const useGetPengumuman = ({
  page,
  perPage,
  tipe,
  tahun,
}: {
  page?: number;
  perPage?: number;
  tipe?: string;
  tahun?: string;
}) => {
  const getPengumuman = async (): Promise<metadata<Pengumuman>> => {
    const response = await api.get("/publikasi", {
      params: {
        page,
        limit: perPage,
        tipe,
        tahun,
      },
    });
    return response.data.metadata;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["pengumuman", page, perPage, tipe, tahun],
    queryFn: getPengumuman,
  });
  return { data, isLoading, error };
};

export default useGetPengumuman;
