import useGetDetailProdukController from "./libs/useGetDetailProdukController";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill-new";
import { Typography } from "@material-tailwind/react";
import "./index.css";
import ProdukCol from "../../components/produk-col";
import PublikasiCol from "../../components/publikasi-col";
const DetailProduk = () => {
  const { data, isLoading, error } = useGetDetailProdukController();
  console.log(data);
  return (
    <div className="lg:px-[15vw] flex lg:flex-row gap-4 flex-col lg:py-10 p-4 bg-white w-full min-h-screen">
      <div className="flex w-full lg:w-4/5 flex-col gap-4">
        <div className="flex w-full h-56 overflow-hidden rounded-lg items-center justify-center lg:h-[calc(50vh-5rem)] relative">
          <img
            src={data?.foto}
            className="w-auto h-full rounded-lg z-50 object-contain"
            alt={data?.judul}
          />
          <img
            src={data?.foto}
            className="w-full z-10 blur-sm rounded-lg h-full object-cover absolute top-0 left-0"
            alt={data?.judul}
          />
        </div>
        <div className="flex mt-4 flex-col">
          <div className="flex flex-col border-b border-gray-400 pb-4 mb-4 gap-1">
            <Typography variant="h4" className="text-primary-default">
              {data?.judul}
            </Typography>
            <Typography variant="paragraph" className="text-gray-500">
              {data?.deskripsi}
            </Typography>
          </div>
          <div className="w-full h-full">
            <ReactQuill
              value={data?.content}
              readOnly={true}
              theme={"bubble"}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block flex flex-col lg:w-1/5">
        <ProdukCol id={data?.id?.toString()} />
        <div className="h-8" />
        <PublikasiCol />
      </div>
    </div>
  );
};

export default DetailProduk;
