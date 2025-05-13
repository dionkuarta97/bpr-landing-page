import useGetPengumuman from "../../../hooks/useGetPengumuman";

const usePengumumanController = () => {
  const { data, isLoading, error } = useGetPengumuman({ perPage: 5 });
  return { data, isLoading, error };
};

export default usePengumumanController;
