import useBannerController from "../libs/useBannerController";
import { Carousel } from "@material-tailwind/react";
const Banner = () => {
  const { data, isLoading, error } = useBannerController();
  console.log(data);
  return (
    <Carousel autoplay placeholder="placeholder">
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
            className="relative z-10 max-w-full max-h-full object-contain"
            src={item.path}
            alt={item.judul || ""}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
