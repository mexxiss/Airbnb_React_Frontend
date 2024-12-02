import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../../store/features/propertiesSlice";
import Loader from "../../Components/Loader/Loader";
import { RootState } from "../../store/store";
import { isRoomsCountNumber } from "../../utils/common";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage";
import { useFetchProperties } from "../../hooks/react-queries/properties";
const Properties = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, isError } = useFetchProperties();

  const finalData = useMemo(() => data?.data, [data]);

  const memoizedDispatch = useCallback(() => {
    if (finalData) {
      dispatch(setProperties(finalData));
    }
  }, [finalData, dispatch]);

  // Using useEffect to dispatch only when finalData changes
  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const propertiesData = useSelector(
    (state: RootState) => state.properties.properties
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error.message} />;
  }

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-4 xs:gap-5">
        {propertiesData.map((property, index) => (
          <div
            key={index}
            className="border border-primary flex flex-col gap-2 sm:gap-4 relative"
          >
            <Link
              to={`/user-panel/calender/${property?._id}`}
              className="absolute w-full h-full"
            ></Link>
            <div className="">
              <img
                src={property?.property_images[0].img_url}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <div className="px-2 pb-2 sm:pb-4 w-full">
                <div>
                  <h6 className="sm:text-lg md:text-xl text-gray-800 w-[calc(100%_-_10px)] text-nowrap overflow-hidden text-ellipsis">
                    {property?.title}
                  </h6>
                </div>
                <hr className="w-full my-2 sm:my-3 border-primary border-opacity-50" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm tracking-wide">
                    {isRoomsCountNumber(property.property_details.rooms_count)
                      ? `${property?.property_details?.rooms_count} ${
                          property?.property_details?.rooms_count > 1
                            ? "Rooms"
                            : "Room"
                        }`
                      : "Studio"}
                  </span>
                  <div className="text-sm flex items-center gap-1 text-primary">
                    {property?.status === "Active" && (
                      <CheckCircle className="!text-lg" />
                    )}
                    {property?.status === "Active" && "Active"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
