import { Outlet } from "react-router";
import Header from "../../header";
import Footer from "../../footer";
const HeaderWrapper = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex w-full">
        <Header />
      </div>
      <div className="flex w-full">{<Outlet />}</div>
      <div className="flex w-full">
        <Footer />
      </div>
    </div>
  );
};

export default HeaderWrapper;
