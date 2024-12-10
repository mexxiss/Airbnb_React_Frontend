import { EditOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
import Input from "../../Components/CommonField/Input";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { useFetchPropertyById } from "../../hooks/react-queries/properties";
import { useCallback, useEffect, useMemo } from "react";
import { setSelectedProperty } from "../../store/features/propertiesSlice";
import Loader from "../../Components/Loader/Loader";
import ErrorHandleMessage from "../../Components/ErrorHandleComponent/ErrorHandleMessage";
import { formatDate } from "../../utils/common";
import BankDetailsForm from "../../Components/BankDetailsForms/BankDetailsForm";
import DocumentBill from "../../Components/DocumentBills/DocumentBill";

const PropertyDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { data, isLoading, error, isError } = useFetchPropertyById(id || "");

  const finalData = useMemo(() => data, [data]);

  const memoizedDispatch = useCallback(() => {
    if (finalData) {
      dispatch(setSelectedProperty(finalData));
    }
  }, [finalData, dispatch]);

  // Using useEffect to dispatch only when finalData changes
  useEffect(() => {
    memoizedDispatch();
  }, [memoizedDispatch]);

  const propertiyData = useSelector(
    (state: RootState) => state.properties.selectedProperty?.data
  );

  const initialValues = {
    //+
    name: "", //+
  }; //+

  const formik = useFormik({
    //+
    initialValues, //+
    onSubmit: (values) => {
      //+
      console.log(values);

      // Handle form submission//+
    }, //+
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error?.message} />;
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div>
        <ul className="text-sm text-gray-500 flex items-center gap-1">
          <li>
            <Link
              to="/user-panel/settings"
              className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
            >
              Settings
            </Link>
          </li>
          <li>
            <KeyboardArrowRightOutlined className="!text-xl" />
          </li>
          <li>
            <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
              Property Details
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="text-xl xs:text-2xl sm:text-3xl xl:text-4xl text-gray-600">
          {propertiyData?.properties?.title}
        </h4>
        <hr className="my-5 border-primary" />
        <div className="">
          <div>
            <h6 className="text-lg sm:text-xl md:text-2xl text-primary uppercase tracking-wide">
              Property Details
            </h6>
            <div className="py-6 px-5 border border-primary bg-primary bg-opacity-5 mt-2">
              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
                      <Input
                        name="fullAddress"
                        type="text"
                        label="Full Address"
                        value={`${propertiyData?.properties?.address?.building_no},${propertiyData?.properties?.address?.street},${propertiyData?.properties?.address?.city},${propertiyData?.properties?.address?.country},(${propertiyData?.properties?.address?.pincode})`}
                        disabled
                      />
                    </div>
                    <Input
                      name="parkNum"
                      type="text"
                      label="Parking Number"
                      value={`${propertiyData?.properties?.property_details.parking_no}`}
                      disabled
                    />
                    <Input
                      name="permitCode"
                      type="text"
                      label="Permit Code"
                      value={`${propertiyData?.properties?.property_details.permit?.permit_code}`}
                      disabled
                    />
                    <Input
                      name="permitExpDate"
                      type="text"
                      label="Permit Expiry Date"
                      value={`${formatDate(
                        propertiyData?.properties?.property_details.permit
                          ?.permit_expiry_date || "",
                        "YYYY/MM/DD"
                      )}`}
                      disabled
                    />
                    <Input
                      name="wifiName"
                      type="text"
                      label="Wifi Name"
                      value={`${propertiyData?.properties?.property_details.wifi?.name}`}
                      disabled
                    />
                    <Input
                      name="wifiPassword"
                      type="text"
                      label="Wifi Password"
                      value={`${propertiyData?.properties?.property_details.wifi?.password}`}
                      disabled
                    />
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-4">
              <h6 className="text-lg sm:text-xl md:text-2xl text-primary uppercase tracking-wide">
                Utilities Details
              </h6>
              <Link
                to={`/user-panel/settings/property-details/update-utility-details/${id}`}
                className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center"
              >
                <EditOutlined className="!text-lg" />
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <BankDetailsForm />
          </div>
          <DocumentBill />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
