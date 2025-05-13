import api from "../axios";
import { useQuery } from "@tanstack/react-query";
export interface Banner {
  id: number;
  judul: string | null;
  deskripsi: string | null;
  path: string;
  created_at: string;
  updated_at: string;
}

const useGetBanner = () => {
  const getBanner = async (): Promise<Banner[]> => {
    const response = await api.get("/profile/banner");
    return response.data.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["banner"],
    queryFn: getBanner,
  });
  return { data, isLoading, error };
};

export default useGetBanner;
