import api from "../axios";
import { useQuery } from "@tanstack/react-query";
export interface VisiMisi {
  visi: string;
  misi: [
    {
      id: number;
      judul: string;
      deskripsi: string;
      created_at: string;
      updated_at: string;
    },
    {
      id: number;
      judul: string;
      deskripsi: string;
      created_at: string;
      updated_at: string;
    },
    {
      id: number;
      judul: string;
      deskripsi: string;
      created_at: string;
      updated_at: string;
    }
  ];
}

const useGetVisiMisi = () => {
  const getVisiMisi = async (): Promise<VisiMisi> => {
    const response = await api.get("/profile/visi-misi");
    return response.data.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["visi-misi"],
    queryFn: getVisiMisi,
  });
  return { data, isLoading, error };
};

export default useGetVisiMisi;
