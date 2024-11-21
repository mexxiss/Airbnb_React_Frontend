import { lazy, Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./Layout/Layout.tsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.tsx";
import BookingLayout from "./Layout/BookingLayout.tsx";
import Login from "./Pages/Auth/Login.tsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword.tsx";
import { fetchGallary } from "./services/apiServices.ts";

const Home = lazy(() => import("./Pages/Home/Home.tsx"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing.tsx"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs.tsx"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs.tsx"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery.tsx"));
const EstimateRevenue = lazy(
  () => import("./Pages/EstimateRevenue/EstimateRevenue.tsx")
);

// Lazy loading services
const CleaningMaintenance = lazy(
  () => import("./Pages/Services/CleaningMaintenance.tsx")
);
const InteriorDesign = lazy(
  () => import("./Pages/Services/InteriorDesign.tsx")
);
const ManagementSupport = lazy(
  () => import("./Pages/Services/ManagementSupport.tsx")
);
const ListingManagement = lazy(
  () => import("./Pages/Services/ListingManagement.tsx")
);
const Service = lazy(() => import("./Components/Booking/Service.tsx"));
const BookingContact = lazy(
  () => import("./Components/Booking/BookingContact.tsx")
);

const App = () => {
  useEffect(() => {
    fetchGallary({
      showAll: true, // showAll is a boolean
      key: "bedrooms", // key is a string
    });
  }, []);

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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
