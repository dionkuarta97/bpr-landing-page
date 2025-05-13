import Typography from "@material-tailwind/react/components/Typography";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { Link } from "react-router";
import useGetProduk from "../../hooks/useGetProduk";

const ProdukKami = () => {
  const { data } = useGetProduk({ perPage: 5 });

  return (
    <div className="w-full flex  flex-col bg-white gap-8 pb-20">
      <Typography
        placeholder="sticky"
        variant="h2"
        className="text-primary-dark lg:text-4xl text-2xl"
      >
        Produk Kami
      </Typography>

      <div className="w-full flex justify-end">
        <Link
          to="/"
          className="text-primary-dark hover:text-primary-light transition-all border-b border-primary-dark duration-300"
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
              <Button className="bg-primary-default mt-auto w-fit">
                BACA SELENGKAPNYA
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProdukKami;
