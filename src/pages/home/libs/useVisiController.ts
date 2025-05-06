import useGetStruktur from "../../../hooks/useGetStruktur";
import useGetVisiMisi from "../../../hooks/useGetVisiMisi";

const useVisiController = () => {
  const { data, isLoading, error } = useGetVisiMisi();
  const { data: struktur } = useGetStruktur();
  return { data, isLoading, error, struktur };
};

export default useVisiController;
