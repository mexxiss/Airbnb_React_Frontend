
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const Layout = () => {
  return (
    <div className="max-w-[1900px] mx-auto">
      <Header />
      <main className="mt-[-50px] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
