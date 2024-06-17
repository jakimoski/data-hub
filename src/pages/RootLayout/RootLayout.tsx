import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Wishlist from "../../components/WishList/Wishlist";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <Wishlist />
    </>
  );
}
