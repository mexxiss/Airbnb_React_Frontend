import { Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { IHomeContentData } from "../types/homeContentTypes.js";
import { fetchHomeContent } from "../services/apiServices.js";
import { useEffect } from "react";
import { setHomeContent } from "../store/features/homeContentSlice.js";

interface IResp {
  success: boolean | null;
  data: IHomeContentData | null;
  statusCode: number | null;
  message: string | null;
}
import Header from "../Components/Header/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";


const Layout = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, data } = useQuery<IResp>({
    queryKey: ["homeContent"], // Query key to uniquely identify the query
    queryFn: fetchHomeContent, // Function to fetch data
  });
  const finalData = data?.data;
  useEffect(() => {
    dispatch(setHomeContent(finalData as IHomeContentData));
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (isError && error instanceof Error) return <p>Error: {error.message}</p>;
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
