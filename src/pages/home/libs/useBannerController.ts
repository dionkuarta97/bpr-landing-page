import useGetBanner from "../../../hooks/useGetBanner";

const useBannerController = () => {
  const { data, isLoading, error } = useGetBanner();

  return { data, isLoading, error };
};

export default useBannerController;
