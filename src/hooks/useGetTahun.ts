import api from "../axios";
import { useQuery } from "@tanstack/react-query";

const useGetTahun = () => {
  const getTahun = async (): Promise<string[]> => {
    const response = await api.get("/publikasi/tahun");
    return response.data.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["tahun"],
    queryFn: getTahun,
  });
  return { data, isLoading, error };
};

export default useGetTahun;
