import CustomTabs from "./components/tabs";
import ProdukKami from "../../components/produk-kami";
const TentangKami = () => {
  return (
    <div className="lg:min-h-[calc(100vh-350px)] min-h-screen w-full bg-white lg:p-20 p-4 flex flex-col">
      <CustomTabs />
      <ProdukKami />
    </div>
  );
};

export default TentangKami;
