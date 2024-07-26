import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

import "./index.css";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import HomeDesign from "./pages/HomeDesign/HomeDesign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/productDetails",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/design",
    element: <HomeDesign />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);