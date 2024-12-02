import { Accordion } from "flowbite-react";
import { useDispatch } from "react-redux";
import { IFaqData, IFaqParams } from "../../types/faqTypes";
import { fetchFaqs } from "../../services/apiServices";
import { useQuery } from "@tanstack/react-query";
import { setFaqs } from "../../store/features/faqSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorHandleMessage from "../ErrorHandleComponent/ErrorHandleMessage";
import img9 from "../../assets/images/img9.png";

interface IResponse {
  message: string | null;
  success: boolean | null;
  statusCode: number | null;
  data: IFaqData[] | null;
}

const pathMap: { [key: string]: string } = {
  "/pricing": "pricing",
  "/services/cleaning-maintenance": "cleaning maintenance",
  "/services/interior-design": "interior design",
  "/services/listing-management": "listing management",
  "/services/management-support": "management support",
  "/": "home",
  "/estimate-revenue": "estimate revenue",
  "/about-us": "home",
};

const FAQ = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const queryParams: IFaqParams = {
    page: pathMap[location.pathname],
  };
  console.log();
  const { isLoading, isError, error, data } = useQuery<IResponse>({
    queryKey: ["faqData", queryParams],
    queryFn: () => fetchFaqs(queryParams),
  });

  const finalData = data?.data;

  useEffect(() => {
    dispatch(setFaqs(finalData as IFaqData[]));
  }, [data]);

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error.message} />;
  }

  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h4 className="text-3xl sm:text-[34px] xl:text-[36px] 2xl:text-[42px] font-semibold text-text1 xl:leading-[50px]">
            {title}
          </h4>
          <p className="text-lg text-primary mt-2">Contact us for more info</p>
        </div>
        <div className="lg:flex mt-10">
          <div className="lg:w-2/5">
            <div className="hidden lg:block ">
              <img
                src={img9}
                className=" mx-auto rounded-bl-[40px] rounded-tr-[40px]"
              />
            </div>
          </div>
          <div className="lg:w-3/5 lg:pl-6 2xl:pl-10 mt-10 lg:mt-0">
            <div>
              <Accordion className="rounded-none last:border-b-0 border-t-0 border-x-0">
                {(finalData || []).map((item: any, index: any) => (
                  <Accordion.Panel key={index} className="border-b-2">
                    <Accordion.Title className="text-xl font-medium text-text1 focus:ring-0 focus:bg-transparent bg-transparent px-0 border-b-0 lg:pl-6 lg:pr-6 hover:bg-transparent items-start">
                      <p className="flex">
                        <span className="text-primary inline-block mr-4">
                          {String(index + 1).padStart(2, "0")}
                        </span>{" "}
                        {item.question || "Untitled Question"}
                      </p>
                    </Accordion.Title>
                    <Accordion.Content className="!border-t-0 pl-5 pr-4 lg:pl-16 lg:pr-16 pt-0">
                      {item.answer || "No answer available."}
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
