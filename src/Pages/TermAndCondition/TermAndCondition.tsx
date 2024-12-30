import { useCallback, useEffect, useMemo, useState } from "react";
import { icon27 } from "../../assets/icons/index.ts";
import { bg1 } from "../../assets/images/index.ts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLegals } from "../../hooks/react-queries/legals/useLegals.ts";
import { setLegals } from "../../store/features/legalsSlice.ts";
import { RootState } from "../../store/store.ts";
import Loader from "../../Components/Loader/Loader.tsx";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage.tsx";
import "./TermAndCondition.css";

interface TabsPropes {
  id?: string;
  title?: string;
  type?: string;
}
const renderTabButtons: TabsPropes[] = [
  {
    id: "termCondition",
    title: "Terms & Conditions",
    type: "terms",
  },
  {
    id: "refundPolicy",
    title: "Refund Policy",
    type: "refund",
  },
  {
    id: "privacyPolicy",
    title: "Privacy Policy",
    type: "privacy",
  },
];

const TermAndCondition = () => {
  const [isActive, SetIsActive] = useState("Terms & Conditions");
  const [type, setType] = useState("terms");
  const [idSelected, setSelectedId] = useState("termCondition");
  const dispatch = useDispatch();

  const {
    data: legals,
    isLoading,
    isError,
    error,
  } = useLegals(type || "terms");

  const blogData = useMemo(() => legals, [legals]);

  const memoizedDispatch = useCallback(() => {
    if (blogData) {
      dispatch(setLegals(blogData));
    }
  }, [blogData, dispatch]);

  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const legalData = useSelector((state: RootState) => state.legals.legals);

  if (isLoading) return <Loader />;
  if (isError && error instanceof Error)
    return <ErrorHandleMessage msg={error.message} />;

  return (
    <div>
      {/* banner */}
      <div
        className="pt-20 sm:pt-28 pb-10 sm:pb-14 lg:pt-32 lg:pb-20 bg-cover bg-bottom"
        style={{
          backgroundImage: `linear-gradient(#FFF1D9CC, #FFF1D9CC), url(${bg1})`,
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-col gap-4">
            <h2 className="text-3xl xs:text-4xl sm:text-[42px] sm:text-5xl font-bold text-center text-[#1F1607] font-light]">
              Terms & conditions
            </h2>
            <p className="flex items-center gap-4 text-[#4C360E]">
              <span className="">
                <Link
                  to="/"
                  className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                >
                  Home
                </Link>
              </span>
              <span>
                <img src={icon27} className="w-4" />
              </span>
              <span>Terms & conditions</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pb-10 md:pb-16 lg:pb-20 pt-14">
        <div className="container mx-auto">
          <div>
            <ul className="flex overflow-x-auto items-center gap-4 border-b-2 border-[#AEAEAE] pb-[5.5px]">
              {renderTabButtons?.map((render_button, i) => (
                <li key={render_button.id}>
                  <Link
                    to={`#${render_button.id}`}
                    className={`px-4 py-1 text-nowrap text-center capitalize md:text-lg xl:text-xl ${
                      isActive === render_button.title
                        ? "border-b-[3.5px] border-[#d2b787] font-medium text-[#aa8d5a]"
                        : "text-[#1F1607] font-normal"
                    }`}
                    onClick={() => {
                      SetIsActive(render_button.title || "");
                      setSelectedId(render_button.id || "");
                      setType(render_button.type || "");
                    }}
                  >
                    {render_button.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              {legalData && (
                <div className="pt-10 termAndCondition" id={`${idSelected}`}>
                  <h4 className="text-xl sm:text-2xl font-medium text-primary">
                    {legalData.title}
                  </h4>
                  <div dangerouslySetInnerHTML={{ __html: legalData.body }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCondition;
