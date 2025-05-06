import Typography from "@material-tailwind/react/components/Typography";
import useVisiController from "../libs/useVisiController";
import { Carousel } from "@material-tailwind/react";
import visiImage from "../../../assets/image/visi-image.png";
const Visi = () => {
  const { data, isLoading, error, struktur } = useVisiController();
  console.log(data);
  return (
    <div className="w-full lg:mt-10 flex lg:flex-row flex-col gap-12 lg:justify-between  lg:px-20 px-4">
      <div className="w-full flex flex-col  gap-4 lg:w-1/2">
        <Typography
          className="text-primary-dark lg:text-4xl text-2xl"
          placeholder="sticky"
          variant="h2"
        >
          Visi Kami
        </Typography>

        <Typography
          placeholder="sticky"
          variant="paragraph"
          className="lg:text-2xl  text-medium"
        >
          {data?.visi}
        </Typography>
        <img
          src={visiImage}
          alt="visi"
          className="w-full mt-auto h-[calc(50vh-10rem)] object-contain"
        />
      </div>
      <div className="w-full flex flex-col gap-4 lg:w-1/2">
        <Typography
          className="text-primary-dark lg:text-4xl text-2xl"
          placeholder="sticky"
          variant="h2"
        >
          Struktur Perusahaan
        </Typography>
        <div className="w-full flex flex-row gap-4">
          <Carousel className="rounded-lg" autoplay placeholder="placeholder">
            {struktur?.map((item) => (
              <>
                <div
                  className="flex w-full h-48 items-center justify-center lg:h-[calc(80vh-20rem)] relative"
                  key={item.id}
                >
                  <img
                    className="absolute w-full z-0 h-full object-cover filter blur-lg"
                    src={item.foto}
                  />
                  <img
                    className="relative z-10 max-w-full max-h-full object-contain"
                    src={item.foto}
                    alt={item.nama || ""}
                  />
                </div>
                <div className=" flex flex-col  gap-2 bg-white w-full mt-4 items-center justify-center">
                  <Typography
                    placeholder="sticky"
                    className="text-primary-dark lg:text-2xl text-medium"
                    variant="paragraph"
                  >
                    {item.nama}
                  </Typography>
                  <Typography
                    placeholder="sticky"
                    className="text-gray-500 "
                    variant="paragraph"
                  >
                    "{item.quote}"
                  </Typography>
                </div>
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Visi;
