import Typography from "@material-tailwind/react/components/Typography";
import useVisiController from "../libs/useVisiController";
import { Carousel, IconButton } from "@material-tailwind/react";
import visiImage from "../../../assets/image/visi-image.png";
const Visi = () => {
  const { data, isLoading, error, struktur } = useVisiController();

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
          <Carousel
            prevArrow={({ handlePrev }) => (
              <IconButton
                placeholder="placeholder"
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="gray"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                placeholder="placeholder"
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="gray"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
            navigation={() => <div />}
            className="rounded-lg"
            autoplay
            placeholder="placeholder"
          >
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
                    {item.jabatan}
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
