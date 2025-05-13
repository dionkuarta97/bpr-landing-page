import api from "../axios";
import { useQuery } from "@tanstack/react-query";
export interface Profile {
  id: number;
  name: string;
  alamat: string;
  no_hp: string;
  email: string;
  visi: string;
  sejarah: string | null;
  link_fb: string | null;
  link_ig: string | null;
  created_at: string;
  updated_at: string;
}

const useGetProfile = () => {
  const getProfile = async (): Promise<Profile> => {
    const response = await api.get("/profile/general-information");
    return response.data.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  return { data, isLoading, error };
};

export default useGetProfile;
