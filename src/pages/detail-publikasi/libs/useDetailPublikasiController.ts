import { useParams } from "react-router";
import useGetDetailPublikasi from "../../../hooks/useGetDetailPublikasi";

const useGetDetailPublikasiController = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetDetailPublikasi({
    id: Number(params.id),
  });

  return { data: data?.data, isLoading, error };
};

export default useGetDetailPublikasiController;
