import { useMemo } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
const useContentWrapperContoller = () => {
  const pathname = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const menu = useMemo(() => {
    if (pathname.pathname === "/produk-kami") {
      return [
        {
          label: "Semua",
          path: "/produk-kami",
          id: "semua",
          active: searchParams.get("tipe") === null,
        },
        {
          label: "Tabungan",
          path: "/produk-kami?tipe=tabungan",
          id: "tabungan",
          active: searchParams.get("tipe") === "tabungan",
        },
        {
          label: "Deposito",
          path: "/produk-kami?tipe=deposito",
          active: searchParams.get("tipe") === "deposito",
          id: "deposito",
        },
        {
          label: "Kredit",
          path: "/produk-kami?tipe=kredit",
          active: searchParams.get("tipe") === "kredit",
          id: "kredit",
        },
      ];
    }
    if (pathname.pathname === "/publikasi") {
      return [
        {
          label: "Semua",
          path: "/publikasi",
          id: "semua",
          active: searchParams.get("tipe") === null,
        },
        {
          label: "Pengumuman",
          path: "/publikasi?tipe=pengumuman",
          id: "pengumuman",
          active: searchParams.get("tipe") === "pengumuman",
        },
        {
          label: "Berita",
          path: "/publikasi?tipe=berita",
          id: "berita",
          active: searchParams.get("tipe") === "berita",
        },
        {
          label: "Laporan",
          path: "/publikasi?tipe=laporan",
          id: "laporan",
          active: searchParams.get("tipe") === "laporan",
        },
      ];
    }
  }, [pathname.pathname, searchParams]);

  const activeTab = useMemo(() => {
    return searchParams.get("tipe") || "semua";
  }, [searchParams]);

  return { menu, navigate, activeTab };
};

export default useContentWrapperContoller;
