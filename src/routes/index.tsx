import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/home";
import HeaderWrapper from "../components/wrapper/header-wrapper";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
