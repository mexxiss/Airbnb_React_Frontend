
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./Layout/Layout.tsx";
import BookingLayout from "./Layout/BookingLayout.tsx";
import Home from "./Pages/Home/Home.tsx";
import Pricing from "./Pages/Pricing/Pricing.tsx";
import AboutUs from "./Pages/AboutUs/AboutUs.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";
import Gallery from "./Pages/Gallery/Gallery.tsx";
import EstimateRevenue from "./Pages/EstimateRevenue/EstimateRevenue.tsx";
import CleaningMaintenance from "./Pages/Services/CleaningMaintenance.tsx";
import InteriorDesign from "./Pages/Services/InteriorDesign.tsx";
import ManagementSupport from "./Pages/Services/ManagementSupport.tsx";
import ListingManagement from "./Pages/Services/ListingManagement.tsx";
import Login from "./Pages/Auth/Login.tsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword.tsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.tsx";
import Service from "./Components/Booking/Service.tsx";
import BookingContact from "./Components/Booking/BookingContact.tsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop /> {/* Ensure ScrollToTop is included here */}
          <Layout />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/estimate-revenue",
          element: <EstimateRevenue />,
        },
        {
          path: "/services/cleaning-maintenance",
          element: <CleaningMaintenance />,
        },
        {
          path: "/services/interior-design",
          element: <InteriorDesign />,
        },
        {
          path: "/services/management-support",
          element: <ManagementSupport />,
        },
        {
          path: "/services/listing-management",
          element: <ListingManagement />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/booking",
      element: <BookingLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "services",
          element: <Service />,
        },
        {
          path: "contact-us",
          element: <BookingContact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
