import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";

export default function NavbarLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
