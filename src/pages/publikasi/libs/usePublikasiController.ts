import { useSearchParams } from "react-router";
import useGetPengumuman from "../../../hooks/useGetPengumuman";
import { useMemo } from "react";
import useGetTahun from "../../../hooks/useGetTahun";
const usePublikasiController = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: tahun } = useGetTahun();
  const { data } = useGetPengumuman({
    page: searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1,
    perPage: 10,
    tipe: searchParams.get("tipe") || undefined,
    tahun: searchParams.get("tahun") || undefined,
  });
  const page = searchParams.get("page") || 1;
  const tahunParam = searchParams.get("tahun") || "Semua";

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

  const onTahunChange = (value: string) => {
    if (value === "Semua") {
      searchParams.delete("tahun");
      searchParams.delete("page");
    } else {
      searchParams.set("tahun", value);
      searchParams.set("page", "1");
    }
    setSearchParams(searchParams);
  };

  return {
    data,
    disableSebelumnya,
    disableSelanjutnya,
    appedSearchParams,
    tahun,
    onTahunChange,
    tahunParam,
  };
};

export default usePublikasiController;
