import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/Authentication/Login";
import SingUp from "../pages/Authentication/SingUp";
import Products from "../pages/products/Products";
import CategoryProducts from "../pages/Jewelry&Watches/CategoryProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categoryProducts/:categoryName",
        element:<CategoryProducts/>
      },
    ],
  },
]);

export default router;