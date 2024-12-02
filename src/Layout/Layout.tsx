import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { IHomeContentData } from "../types/homeContentTypes.ts";
import { fetchHomeContent } from "../services/apiServices.ts";
import { useEffect, useMemo, useCallback } from "react";
import { setHomeContent } from "../store/features/homeContentSlice.ts";
import Loader from "../Components/Loader/Loader.tsx";
import ErrorHandleMessage from "../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";
import { useFetchContactDetails } from "../hooks/react-queries/contactus/useFetchContactDetails.ts";
import { setContact } from "../store/features/contactUsSlice.ts";
import { useFetchHomeContent } from "../hooks/react-queries/homeContent/useFetchHomeContent.ts";

const Layout = () => {
  const dispatch = useDispatch();
  const {
    isLoading: isContactLoading,
    isError: isContactError,
    error: contactError,
    data: contactData,
  } = useFetchContactDetails();

  // Fetching home content data
  const {
    isLoading: isHomeContentLoading,
    isError: isHomeContentError,
    error: homeContentError,
    data: homeContentData,
  } = useFetchHomeContent();

  // Memoize final data
  const finalContactData = useMemo(() => contactData?.data, [contactData]);
  const finalHomeContentData = useMemo(
    () => homeContentData?.data,
    [homeContentData]
  );

  // Dispatch actions
  const dispatchContact = useCallback(() => {
    if (finalContactData) {
      dispatch(setContact(finalContactData));
    }
  }, [dispatch, finalContactData]);

  const dispatchHomeContent = useCallback(() => {
    if (finalHomeContentData) {
      dispatch(setHomeContent(finalHomeContentData));
    }
  }, [dispatch, finalHomeContentData]);

  // UseEffects to trigger dispatches
  useEffect(() => {
    if (finalContactData) {
      dispatchContact();
    }
  }, [dispatchContact]);

  useEffect(() => {
    if (finalHomeContentData) {
      dispatchHomeContent();
    }
  }, [dispatchHomeContent]);

  // Handle loading and error states
  if (isContactLoading || isHomeContentLoading) {
    return <Loader />;
  }

  if (
    (isContactError && contactError instanceof Error) ||
    (isHomeContentError && homeContentError instanceof Error)
  ) {
    return (
      <ErrorHandleMessage
        msg={
          contactError?.message ||
          homeContentError?.message ||
          "An unexpected error occurred."
        }
      />
    );
  }
  return (
    <div className="max-w-[1900px] mx-auto">
      <Header />
      <main className="mt-[-50px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
