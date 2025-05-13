import Typography from "@material-tailwind/react/components/Typography";
import logo from "../../assets/image/logo.png";
import useGetProfile from "../../hooks/useGetProfile";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { Link, useLocation } from "react-router";
const Footer = () => {
  const { data } = useGetProfile();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full flex flex-col">
      <div className="w-full  lg:px-20 py-10 px-4 bg-primary-dark text-white">
        <div className="w-full flex lg:flex-row flex-col gap-4">
          <div className="lg:w-2/5 w-full flex flex-col gap-4">
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <Typography placeholder="sticky" variant="paragraph">
              © 2025 {data?.name}
            </Typography>
            <div className="w-full flex flex-row gap-4">
              <a
                target="_blank"
                href={data?.link_ig ?? ""}
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-4xl" />
              </a>
              <a
                target="_blank"
                href={data?.link_fb ?? ""}
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-4xl" />
              </a>
            </div>
          </div>
          <div className="lg:w-3/5 w-full flex flex-row gap-2">
            <div className="w-full flex flex-col mt-4 lg:mt-0 lg:gap-8 gap-4">
              <Typography
                placeholder="sticky"
                className="lg:text-xl text-lg"
                variant="h6"
              >
                Menu
              </Typography>
              <div className="w-full flex flex-col gap-2">
                <Link onClick={scrollToTop} to="/">
                  <Typography placeholder="sticky" variant="paragraph">
                    Halaman Utama
                  </Typography>
                </Link>
                <Link onClick={scrollToTop} to="/tentang-kami">
                  <Typography placeholder="sticky" variant="paragraph">
                    Tentang Kami
                  </Typography>
                </Link>
                <Link onClick={scrollToTop} to="/produk-kami">
                  <Typography placeholder="sticky" variant="paragraph">
                    Produk Kami
                  </Typography>
                </Link>
                <Link onClick={scrollToTop} to="/publikasi">
                  <Typography placeholder="sticky" variant="paragraph">
                    Publikasi
                  </Typography>
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col mt-4 lg:mt-0 lg:gap-8 gap-4">
              <Typography
                placeholder="sticky"
                className="lg:text-xl text-lg"
                variant="h6"
              >
                Kontak
              </Typography>
              <div className="w-full flex flex-col gap-2">
                <a
                  target="_blank"
                  href={`https://wa.me/${data?.no_hp}`}
                  className="w-full items-center flex flex-row gap-2"
                >
                  <FaWhatsapp className="text-2xl" />
                  <Typography placeholder="sticky" variant="paragraph">
                    {data?.no_hp}
                  </Typography>
                </a>
                <div className="w-full items-start flex flex-row gap-2">
                  <div>
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>

                  <Typography placeholder="sticky" variant="paragraph">
                    {data?.alamat}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-full lg:block hidden flex flex-col mt-4 lg:mt-0 lg:gap-8 gap-4">
              <Typography
                placeholder="sticky"
                className="lg:text-xl text-lg"
                variant="h6"
              >
                Terdaftar Dan Diawasi Oleh :
              </Typography>
              <div className="w-full flex flex-row items-center mt-8 gap-2 justify-start">
                <a target="_blank" href="https://www.ojk.go.id/">
                  <img
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png"
                    }
                    alt="logo"
                    className="w-auto h-[50px] bg-white p-2 rounded-lg object-contain"
                  />
                </a>
                <a target="_blank" href="https://lps.go.id/">
                  <img
                    src={
                      "https://infobanknews.com/wp-content/uploads/2019/04/logo-lps.png"
                    }
                    alt="logo"
                    className="w-auto h-[50px] bg-white p-2 rounded-lg object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:hidden block flex flex-col mt-4 lg:mt-0 lg:gap-8 gap-4">
            <Typography
              placeholder="sticky"
              className="lg:text-xl text-lg"
              variant="h6"
            >
              Terdaftar Dan Diawasi Oleh :
            </Typography>

            <div className="w-full flex flex-row items-center gap-2 justify-start">
              <a target="_blank" href="https://www.ojk.go.id/">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/8/83/OJK_Logo.png"
                  }
                  alt="logo"
                  className="w-auto h-[50px] bg-white p-2 rounded-lg object-contain"
                />
              </a>
              <a target="_blank" href="https://lps.go.id/">
                <img
                  src={
                    "https://infobanknews.com/wp-content/uploads/2019/04/logo-lps.png"
                  }
                  alt="logo"
                  className="w-auto h-[50px] bg-white p-2 rounded-lg object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-default text-black items-center justify-center p-2 flex w-full flex-row gap-1">
        Powered by
        <a
          className="text-white font-[500]"
          target="_blank"
          href={`https://wa.me/081378957046`}
        >
          Dion Kuarta
        </a>
      </div>
    </div>
  );
};

export default Footer;
