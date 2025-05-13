import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/home";
import HeaderWrapper from "../components/wrapper/header-wrapper";
import TentangKami from "../pages/tentang-kami";
import ProdukKami from "../pages/produk-kami";
import ContentWrapper from "../components/wrapper/content-wrapper";
import DetailProduk from "../pages/detail-produk";
import Publikasi from "../pages/publikasi";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tentang-kami",
        element: <TentangKami />,
      },
      {
        path: "/produk-kami",
        element: <ContentWrapper />,
        children: [
          {
            path: "/produk-kami",
            element: <ProdukKami />,
            index: true,
          },
        ],
      },
      {
        path: "/publikasi",
        element: <ContentWrapper />,
        children: [
          {
            path: "/publikasi",
            element: <Publikasi />,
            index: true,
          },
        ],
      },
      {
        path: "/detail-produk/:id",
        element: <DetailProduk />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
