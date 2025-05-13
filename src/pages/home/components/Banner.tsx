import useBannerController from "../libs/useBannerController";
import { Carousel, IconButton } from "@material-tailwind/react";
const Banner = () => {
  const { data, isLoading, error } = useBannerController();

  return (
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
      autoplay
      placeholder="placeholder"
    >
      {data?.map((item) => (
        <div
          className="flex w-full h-56 items-center justify-center lg:h-[calc(100vh-20rem)] relative"
          key={item.id}
        >
          <img
            className="absolute w-full z-0 h-full object-cover filter blur-lg"
            src={item.path}
          />
          <img
            className="relative z-10 max-w-full h-full object-contain"
            src={item.path}
            alt={item.judul || ""}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
