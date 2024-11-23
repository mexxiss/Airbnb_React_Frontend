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

interface IResp {
  success: boolean;
  data: IHomeContentData | null;
  statusCode: number;
  message: string | null;
}

const Layout = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, error, data } = useQuery<IResp>({
    queryKey: ["homeContent"],
    queryFn: fetchHomeContent,
  });

  const finalData = useMemo(() => data?.data, [data]);

  const memoizedDispatch = useCallback(() => {
    if (finalData) {
      dispatch(setHomeContent(finalData));
    }
  }, [finalData, dispatch]);

  // Using useEffect to dispatch only when finalData changes
  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <p>Error: {error.message}</p>;
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
