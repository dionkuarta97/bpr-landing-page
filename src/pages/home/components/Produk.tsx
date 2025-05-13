import Typography from "@material-tailwind/react/components/Typography";
import useProductController from "../libs/useProductController";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { Link } from "react-router";

const Produk = () => {
  const { jenisProduk, data } = useProductController();

  return (
    <div className="w-full flex lg:mt-10 lg:px-20 px-4 flex-col bg-white gap-8 pb-20">
      <Typography
        placeholder="sticky"
        variant="h2"
        className="text-primary-dark lg:text-4xl text-2xl"
      >
        Jenis Produk
      </Typography>
      <div className="w-full flex lg:flex-row flex-col gap-8">
        {jenisProduk.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col gap-4 bg-white shadow-lg p-8 rounded-lg"
          >
            <div className=" self-center flex w-fit bg-primary-default rounded-lg p-4">
              {item.icon}
            </div>
            <Typography
              placeholder="sticky"
              variant="h2"
              className="text-primary-dark lg:text-2xl text-xl"
            >
              {item.nama}
            </Typography>
            <Typography
              placeholder="sticky"
              variant="paragraph"
              className="text-gray-500"
            >
              {item.deskripsi}
            </Typography>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <Link
          to="/produk-kami"
          className="text-primary-dark hover:text-primary-light transition-all border-b mt-12 border-primary-dark duration-300"
        >
          <Typography
            placeholder="sticky"
            variant="paragraph"
            className="text-primary-dark"
          >
            Lihat Semua
          </Typography>
        </Link>
      </div>
      <div className="w-full flex h-full items-stretch flex-row overflow-hidden overflow-x-auto gap-4">
        {data?.data.map((item) => (
          <Card className="my-6 h-auto flex flex-col">
            <CardHeader
              placeholder="sticky"
              color="blue-gray"
              className=" mt-4 h-56 lg:h-96 w-[80vw] lg:w-[30vw]"
            >
              <img
                src={item.foto}
                alt={item.judul}
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="flex flex-col flex-1 gap-2">
              <div className="flex h-[80px]">
                <Typography
                  placeholder="sticky"
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 line-clamp-2"
                >
                  {item.judul}
                </Typography>
              </div>
              <Typography className="line-clamp-4" placeholder="sticky">
                {item.deskripsi}
              </Typography>
              <div className="flex-1" />
              <Link
                to={`/detail-produk/${item.id}`}
                className="bg-primary-default mt-auto w-fit"
              >
                <Button className="bg-primary-default mt-auto w-fit">
                  BACA SELENGKAPNYA
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Produk;
