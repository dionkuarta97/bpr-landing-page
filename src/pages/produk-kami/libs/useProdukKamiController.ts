import { useSearchParams } from "react-router";
import useGetProduk from "../../../hooks/useGetProduk";
import { useMemo } from "react";

const useProdukKamiController = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useGetProduk({
    page: searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1,
    perPage: 10,
    tipe: searchParams.get("tipe") || undefined,
  });
  const page = searchParams.get("page") || 1;

  const disableSebelumnya = useMemo(() => {
    if (page) {
      return Number(page) <= 1;
    }
    return true;
  }, [searchParams, data, page]);
  const disableSelanjutnya = useMemo(() => {
    if (page) {
      return Number(page) >= (data?.total_page || 0);
    }
    return true;
  }, [searchParams, data, page]);

  const appedSearchParams = (params: Record<string, string>) => {
    window.scrollTo({
      top: 0,
    });
    if (Number(params.page) > 1) {
      Object.entries(params).forEach(([key, value]) => {
        searchParams.set(key, value);
      });
    } else {
      searchParams.delete("page");
    }
    setSearchParams(searchParams);
  };

  return { data, disableSebelumnya, disableSelanjutnya, appedSearchParams };
};

export default useProdukKamiController;
