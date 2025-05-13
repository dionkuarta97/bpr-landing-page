import useGetProduk from "../../../hooks/useGetProduk";
import { useMemo } from "react";
import { FaCalendarCheck, FaCreditCard, FaMoneyBill } from "react-icons/fa";

const useProductController = () => {
  const { data, isLoading, error } = useGetProduk({ perPage: 5 });
  const jenisProduk = useMemo(() => {
    return [
      {
        id: 1,
        nama: "Tabungan",
        icon: <FaMoneyBill className="text-white text-4xl" />,
        deskripsi:
          "Tabungan adalah jenis produk yang memungkinkan Anda menabung uang dengan aman dan teratur.",
      },
      {
        id: 2,
        nama: "Deposito",
        icon: <FaCalendarCheck className="text-white text-4xl" />,
        deskripsi:
          "Deposito adalah produk simpanan berjangka yang memberikan keamanan dan keuntungan bunga tetap bagi Anda.",
      },
      {
        id: 3,
        nama: "Kredit",
        icon: <FaCreditCard className="text-white text-4xl" />,
        deskripsi:
          "Kredit memberikan solusi pembiayaan untuk kebutuhan pribadi maupun usaha Anda dengan syarat yang fleksibel.",
      },
    ];
  }, []);
  return { data, isLoading, error, jenisProduk };
};

export default useProductController;
