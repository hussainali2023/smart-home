import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import About from "./About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => fetch("products.json"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
