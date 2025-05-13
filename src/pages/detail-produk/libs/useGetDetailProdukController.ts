import { useParams } from "react-router";
import useGetDetailProduk from "../../../hooks/useGetDetailProduk";

const useGetDetailProdukController = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetDetailProduk({
    id: Number(params.id),
  });

  return { data: data?.data, isLoading, error };
};

export default useGetDetailProdukController;
