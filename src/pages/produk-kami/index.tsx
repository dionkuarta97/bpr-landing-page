import Typography from "@material-tailwind/react/components/Typography";
import useProdukKamiController from "./libs/useProdukKamiController";
import { Link } from "react-router";
import { Button } from "@material-tailwind/react";
const ProdukKami = () => {
  const { data, disableSebelumnya, disableSelanjutnya, appedSearchParams } =
    useProdukKamiController();
  return (
    <div className="w-full pr-4 flex flex-col gap-4">
      <Typography
        variant="paragraph"
        className="text-primary-default font-bold"
      >
        Total : {data?.total}
      </Typography>
      <div className=" grid grid-cols-1 lg:justify-stretch pb-4 lg:px-0 lg:grid-cols-2 gap-4">
        {data?.data.map((item) => (
          <div
            className="w-full bg-white p-4 border border-gray-400 rounded-[15px] shadow-lg h-full"
            key={item.id}
          >
            <div className="flex flex-col h-full">
              <div>
                <div className="w-full rounded-lg shadow-lg overflow-hidden h-[300px] relative flex justify-center items-center">
                  <img
                    className="w-auto h-full z-10 rounded-lg object-contain"
                    src={item.foto}
                    alt={item.judul}
                  />
                  <img
                    className="w-full z-1 absolute blur-sm top-0 left-0 h-full object-cover"
                    src={item.foto}
                    alt={item.judul}
                  />
                </div>
                <div className="w-full flex flex-col gap-2 my-4">
                  <Typography
                    variant="h6"
                    className="text-primary-dark line-clamp-1"
                  >
                    {item.judul}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-gray-500 line-clamp-2 h-[50px]"
                  >
                    {item.deskripsi}
                  </Typography>
                </div>
              </div>
              <div className="w-full flex flex-row justify-between mt-auto">
                <Typography
                  variant="paragraph"
                  className="text-primary-light font-bold"
                >
                  {item.tipe}
                </Typography>
                <Link
                  to={`/detail-produk/${item.id}`}
                  className="transition-all border-b border-primary-dark duration-300"
                >
                  <Typography
                    variant="paragraph"
                    className="text-primary-dark hover:text-primary-light"
                  >
                    Baca Selengkapnya
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row justify-between">
        <Button
          onClick={() =>
            appedSearchParams({
              page: ((data?.current_page || 1) - 1).toString(),
            })
          }
          variant="outlined"
          color="gray"
          disabled={disableSebelumnya}
        >
          Sebelumnya
        </Button>
        <Button
          onClick={() =>
            appedSearchParams({
              page: ((data?.current_page || 1) + 1).toString(),
            })
          }
          disabled={disableSelanjutnya}
          variant="outlined"
          color="gray"
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};

export default ProdukKami;
