import api from "../axios";
import { useQuery } from "@tanstack/react-query";
export interface Struktur {
  id: number;
  nama: string;
  jabatan: string;
  foto: string;
  quote: string;
  created_at: string;
  updated_at: string;
}

const useGetStruktur = () => {
  const getStruktur = async (): Promise<Struktur[]> => {
    const response = await api.get("/profile/struktur-perusahaan");
    return response.data.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["struktur"],
    queryFn: getStruktur,
  });
  return { data, isLoading, error };
};

export default useGetStruktur;
