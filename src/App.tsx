import { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "aos/dist/aos.css";

import Layout from "./Layout/Layout.tsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.tsx";
import BookingLayout from "./Layout/BookingLayout.tsx";
import Login from "./Pages/Auth/Login.tsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword.tsx";

import Home from "./Pages/Home/Home.tsx";
import Pricing from "./Pages/Pricing/Pricing.tsx";
import AboutUs from "./Pages/AboutUs/AboutUs.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";
import EstimateRevenue from "./Pages/EstimateRevenue/EstimateRevenue.tsx";
import Media from "./Pages/Media/Media.tsx";
import HowToVideos from "./Pages/HowToVideos/HowToVideos.tsx";
import Videos from "./Pages/Videos/Videos.tsx";
import Blogs from "./Pages/Blog/Blogs.tsx";
import BlogDetails from "./Pages/Blog/BlogDetails.tsx";
import TermAndCondition from "./Pages/TermAndCondition/TermAndCondition.tsx";
import AirbnbRequirements from "./Pages/AirbnbRequirements/AirbnbRequirements.tsx";
import AirbnbDubai from "./Pages/Gallery/AirbnbDubai.tsx";
import OwnerApp from "./Pages/Gallery/OwnerApp.tsx";

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
import Help from "./Pages/UserPanel/Help.tsx";
import ContactSupport from "./Pages/UserPanel/ContactSupport.tsx";
import FAQ from "./Pages/UserPanel/FAQ.tsx";
import AOS from "aos";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store.ts";
import { isTokenExpired } from "./utils/token/tokenHandler.ts";
import Gallery from "./Pages/Gallery/Gallery.tsx";
import Utilities from "./Components/dynamicuitilities/Utilities.tsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const isResult = isTokenExpired(token, dispatch);

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
        {
          path: "/media",
          element: <Media />,
        },
        {
          path: "/howtovideos",
          element: <HowToVideos />,
        },
        {
          path: "/videos",
          element: <Videos />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermAndCondition />,
        },
        {
          path: "/airbnb-requirements",
          element: <AirbnbRequirements />,
        },
        {
          path: "/airbnb-dubai",
          element: <AirbnbDubai />,
        },
        {
          path: "/owner-app",
          element: <OwnerApp />,
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
      path: "/user-panel",
      element: <UserPanel />,
      children: [
        {
          path: "/user-panel",
          element: <ProtectedRoute isAuthenticated={!isResult || null} />,
          children: [
            {
              index: true,
              loader: () => redirect("/user-panel/properties"),
            },
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
              path: "settings/change-password/:id?",
              element: <ChangePassword />,
            },
            {
              path: "settings/personal-details/:id?",
              element: <PersonalDetails />,
            },
            {
              path: "settings/property-details/:id",
              element: <PropertyDetails />,
            },
            {
              path: "settings/property-details/update-utility-details/:id?",
              element: <Utilities />,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
