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

import Home from "./Pages/Home/Home.tsx";
import Pricing from "./Pages/Pricing/Pricing.tsx";
import AboutUs from "./Pages/AboutUs/AboutUs.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";
import Gallery from "./Pages/Gallery/Gallery.tsx";
import EstimateRevenue from "./Pages/EstimateRevenue/EstimateRevenue.tsx";

// Lazy loading services
import CleaningMaintenance from "./Pages/Services/CleaningMaintenance.tsx";
import InteriorDesign from "./Pages/Services/InteriorDesign.tsx";
import ManagementSupport from "./Pages/Services/ManagementSupport.tsx";
import ListingManagement from "./Pages/Services/ListingManagement.tsx";
import Service from "./Components/Booking/Service.tsx";
import BookingContact from "./Components/Booking/BookingContact.tsx";
import UserPanel from "./Layout/UserPanel.tsx";
import Properties from "./Pages/UserPanel/Properties.tsx";
import Calender from "./Pages/UserPanel/Calender.tsx";
import Statements from "./Pages/UserPanel/Statements.tsx";
import Maintenance from "./Pages/UserPanel/Maintenance.tsx";
import Settings from "./Pages/UserPanel/Settings.tsx";
import ChangePassword from "./Pages/UserPanel/ChangePassword.tsx";
import PersonalDetails from "./Pages/UserPanel/PersonalDetails.tsx";
import PropertyDetails from "./Pages/UserPanel/PropertyDetails.tsx";
import UtilityDetails from "./Pages/UserPanel/UtilityDetails.tsx";
import Help from "./Pages/UserPanel/Help.tsx";
import ContactSupport from "./Pages/UserPanel/ContactSupport.tsx";
import FAQ from "./Pages/UserPanel/FAQ.tsx";

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
    {
      path: "user-panel",
      element: <UserPanel />,
      children: [
        {
          path: "properties",
          element: <Properties />,
        },
        {
          path: "calender/:id",
          element: <Calender />,
        },
        {
          path: "statements/:id",
          element: <Statements />,
        },
        {
          path: "maintenance/:id",
          element: <Maintenance />,
        },
        {
          path: "settings/:id?",
          element: <Settings />,
        },
        {
          path: "settings/change-password",
          element: <ChangePassword />,
        },
        {
          path: "settings/personal-details",
          element: <PersonalDetails />,
        },
        {
          path: "settings/property-details",
          element: <PropertyDetails />,
        },
        {
          path: "settings/property-details/update-utility-details",
          element: <UtilityDetails />,
        },
        {
          path: "help",
          element: <Help />,
        },
        {
          path: "help/contact-support",
          element: <ContactSupport />,
        },
        {
          path: "help/faq",
          element: <FAQ />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
