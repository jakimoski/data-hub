import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../pages/RootLayout/RootLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Catalogs from "../pages/Catalogs/Catalogs";
import About from "../pages/About/About";
import MyProfile from "../pages/MyProfile/MyProfile";
import ProductPage from "../pages/ProductPage/ProductPage";
import BestDeals from "../pages/BestDeals/BestDeals";
import Filters from "../components/Filters/Filters";
import ProductListing from "../pages/ProductListing/ProductListing";
import FaqsPage from "../pages/FAQs/FaqsPage";

export const routes = createBrowserRouter([
  {
    path: "/data-hub/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/catalogs", element: <Catalogs /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/about", element: <About /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/faq", element: <FaqsPage /> },
      { path: "/best-deals", element: <BestDeals /> },
      { path: "/filters", element: <Filters /> },
      { path: "/category/:name", element: <ProductListing /> },
    ],
  },
]);
