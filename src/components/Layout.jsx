import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="w-5/6 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
export default Layout;
