import { Navbar, Typography } from "@material-tailwind/react";
import { Link, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import useGetProfile from "../../hooks/useGetProfile";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetProfile();
  const pathname = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, pathname]);

  return (
    <Navbar
      className="sticky top-0 z-[100] w-full bg-[#fff] max-w-none rounded-none px-4 lg:px-20 py-6"
      placeholder="sticky"
    >
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex lg:w-[60%] w-[75%] items-center gap-2">
          <Typography
            placeholder="sticky"
            variant="h6"
            className="text-primary-dark  font-[720] lg:text-2xl"
          >
            {data?.name}
          </Typography>
        </div>
        <div className="flex-row items-center gap-8 lg:flex hidden">
          <Link
            className={`hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
              pathname.pathname === "/" ? "text-primary-light" : ""
            }`}
            to="/"
          >
            Halaman Utama
          </Link>
          <Link
            className={`hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
              pathname.pathname === "/tentang-kami" ? "text-primary-light" : ""
            }`}
            to="/tentang-kami"
          >
            Tentang Kami
          </Link>
          <Link
            className={`hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
              pathname.pathname.startsWith("/produk")
                ? "text-primary-light"
                : ""
            }`}
            to="/produk-kami"
          >
            Produk Kami
          </Link>
          <Link
            className={`hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
              pathname.pathname === "/publikasi" ? "text-primary-light" : ""
            }`}
            to="/publikasi"
          >
            Publikasi
          </Link>
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="text-primary-dark text-2xl" />
          ) : (
            <FaBars className="text-primary-dark text-2xl" />
          )}
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="fixed top-[72px] inset-0 h-screen bg-black/50 z-[10]"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[72px] left-0 w-full z-[95]">
            <div className="flex shadow-lg rounded-b-lg items-center p-4 justify-center bg-white flex-col gap-4">
              <Link
                className={`hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
                  pathname.pathname === "/" ? "text-primary-light" : ""
                }`}
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Halaman Utama
              </Link>
              <Link
                className={`hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
                  pathname.pathname === "/tentang-kami"
                    ? "text-primary-light"
                    : ""
                }`}
                to="/tentang-kami"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                className={`hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
                  pathname.pathname === "/produk" ? "text-primary-light" : ""
                }`}
                to="/produk-kami"
                onClick={() => setIsOpen(false)}
              >
                Produk Kami
              </Link>
              <Link
                className={`hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full ${
                  pathname.pathname === "/publikasi" ? "text-primary-light" : ""
                }`}
                to="/publikasi"
                onClick={() => setIsOpen(false)}
              >
                Publikasi
              </Link>
            </div>
          </div>
        </>
      )}
    </Navbar>
  );
};

export default Header;
