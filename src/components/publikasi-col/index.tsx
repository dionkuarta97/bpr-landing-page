import { Typography } from "@material-tailwind/react";
import useGetPengumuman from "../../hooks/useGetPengumuman";
import { useNavigate } from "react-router";
interface PublikasiColProps {
  id?: string;
}

const PublikasiCol = ({ id }: PublikasiColProps) => {
  const { data } = useGetPengumuman({ perPage: 3 });
  const navigate = useNavigate();
  return (
    <>
      {data && data?.data.length > 0 && (
        <div className="w-full flex flex-col px-2 bg-white gap-4 ">
          <Typography className="text-primary-dark font-bold text-2xl">
            Publikasi Terbaru
          </Typography>
          <div className="w-full flex flex-col bg-white gap-4 ">
            {data?.data
              .filter((item) => item.id !== Number(id))
              .map((item) => (
                <div
                  onClick={() => navigate(`/detail-publikasi/${item.id}`)}
                  className="border hover:bg-gray-100 transition-all duration-300 cursor-pointer border-gray-200 rounded-lg p-4 bg-white"
                  key={item.id}
                >
                  <div className="w-full overflow-hidden rounded-lg flex items-center justify-center h-[200px] relative">
                    <img
                      src={item.foto}
                      alt={item.judul}
                      className="w-full h-[200px] z-50 rounded-lg object-contain"
                    />
                    <img
                      src={item.foto}
                      alt={item.judul}
                      className="w-full z-10 h-[200px] blur-sm rounded-lg object-cover absolute top-0 left-0"
                    />
                  </div>
                  <Typography variant="h6" className="text-primary-dark mt-2">
                    {item.judul}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="line-clamp-2 text-gray-500"
                  >
                    {item.deskripsi}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PublikasiCol;
