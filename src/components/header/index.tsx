import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <Navbar
      className="sticky top-0 z-[100] w-full bg-[#fff] max-w-none rounded-none px-4 lg:px-20 py-6"
      placeholder="sticky"
    >
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="bg-primary-dark p-1 rounded-full w-5 h-5">
            <div className="bg-white rounded-full w-full h-full" />
          </div>
          <Typography
            placeholder="sticky"
            variant="h6"
            className="text-primary-dark font-[720] lg:text-2xl"
          >
            BPR SAGO DHARMA
          </Typography>
        </div>
        <div className="flex-row items-center gap-8 lg:flex hidden">
          <Link
            className="hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
            to="/"
          >
            Halaman Utama
          </Link>
          <Link
            className="hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
            to="/"
          >
            Tentang Kami
          </Link>
          <Link
            className="hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
            to="/"
          >
            Produk Kami
          </Link>
          <Link
            className="hover:text-primary-light hover:bg-primary-light/10 transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
            to="/"
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
                className="hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
                to="/"
              >
                Halaman Utama
              </Link>
              <Link
                className="hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
                to="/"
              >
                Tentang Kami
              </Link>
              <Link
                className="hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
                to="/"
              >
                Produk Kami
              </Link>
              <Link
                className="hover:text-primary-light w-fit transition-all duration-300 text-primary-dark font-[600] px-4 py-2 rounded-full"
                to="/"
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
