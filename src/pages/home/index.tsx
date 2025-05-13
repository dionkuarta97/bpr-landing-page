import Banner from "./components/Banner";
import Visi from "./components/Visi";
import Produk from "./components/Produk";
import imagegro from "../../assets/image/image-grow.png";
import Typography from "@material-tailwind/react/components/Typography";
import useGetProfile from "../../hooks/useGetProfile";
import Pengumuman from "./components/Pengumuman";
const Home = () => {
  const { data } = useGetProfile();
  return (
    <div className="w-full flex flex-col bg-white gap-8 pb-20">
      <Banner />
      <Visi />
      <div className="w-full flex border-t px-4 lg:px-0 items-center  border-gray-300 py-10 border-b flex-col lg:gap-8 gap-4">
        <Typography
          className="text-primary-dark lg:text-4xl text-2xl"
          placeholder="sticky"
          variant="h2"
        >
          Sejarah Kami
        </Typography>
        <Typography
          placeholder="sticky"
          variant="h2"
          className="text-gray-500 text-center lg:w-1/2 lg:text-2xl text-xl"
        >
          {data?.sejarah}
        </Typography>
        <img
          src={imagegro}
          alt="imagegro"
          className="w-full h-[calc(100vh-30rem)] object-contain"
        />
      </div>
      <Produk />
      <Pengumuman />
    </div>
  );
};

export default Home;
