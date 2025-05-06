import Banner from "./components/Banner";
import Visi from "./components/Visi";
const Home = () => {
  return (
    <div className="w-full flex flex-col bg-white gap-8 pb-20">
      <Banner />
      <Visi />
    </div>
  );
};

export default Home;
