import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Label, Radio } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import ConfirmDialog from "../../Components/Dialogs/ConfirmDialog";
import { useFormik } from "formik";
import { useServicesProviders } from "../../hooks/react-queries/providersservices/useServicesProviders";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setProvidersServices } from "../../store/features/providersSlice";
import { RootState } from "../../store/store";
import DynamicUtilites from "../../Components/dynamicuitilities/DynamicUtilites";
import { useUtilities } from "../../hooks/react-queries/providersservices/useUtilities";
import { setFetchUtilities } from "../../store/features/utilitiesSlice";

interface UtilityManage {
  utility_name: string;
  manage_allow: boolean;
  property: string;
  user_id: string;
}

const UtilityDetails = () => {
  const { id } = useParams();
  const user_id = useSelector((state: RootState) => state.auth.user?._id);
  const dispatch = useDispatch();

  const { data, isLoading, error, isError } = useServicesProviders();
  const { data: utilities, isLoading: isLoadingUtility, error: errorUtility, isError: isErrorUtility } = useUtilities(id || "");

  const [utilityManage, setUtilityManage] = useState<UtilityManage>({
    utility_name: "",
    manage_allow: false,
    property: id || "",
    user_id: user_id || "",
  });

  useEffect(() => {
    if (data) {
      const finalData = data.data[0];
      dispatch(setProvidersServices({
        internet: finalData.internet,
        electricity_water: finalData.electricity_water,
        gas: finalData.gas,
        chiller: finalData.chiller,
        other: finalData.other,
      }));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (utilities) {
      dispatch(setFetchUtilities(utilities));
    }
  }, [utilities, dispatch]);

  const handleInternetConfirmation = (manage_allow: boolean, service: string) => {
    ConfirmDialog({
      title: "Existing Internet Account",
      text: "Are you sure?",
      confirmText: "Yes",
      cancelText: "No",
      onConfirm: () => {
        console.log("Confirmed");
      },
      onCancel: () => {
        console.log("Cancelled");
      },
    });
  };

  const initialValues = {
    name: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  const options = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
    { value: "Unknown", label: "Unknown" },
    { value: "No Internet", label: "No Internet" },
  ];

  const paidOptions = [
    { value: "Frankporter", label: "Frankporter" },
    { value: "Owner", label: "Owner" },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div>
        <ul className="text-sm text-gray-500 flex items-center gap-1">
          <li>
            <Link
              to="#"
              className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
            >
              Settings
            </Link>
          </li>
          <li>
            <KeyboardArrowRightOutlined className="!text-xl" />
          </li>
          <li>
            <Link
              to="#"
              className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
            >
              Property Details
            </Link>
          </li>
          <li>
            <KeyboardArrowRightOutlined className="!text-xl" />
          </li>
          <li>
            <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
              Utility Details
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="text-xl xs:text-2xl sm:text-3xl xl:text-4xl text-gray-600">
          B110 - B202 Wavez Residence, Dubai Land, Dubai, UAE.
        </h4>
        <hr className="my-5 border-primary" />
        <div className="">
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            <div className="border border-primary px-4 pt-4 pb-6">
              <h6 className="text-2xl text-gray-800">Internet</h6>
              <hr className="my-3 border-primary" />
              <p>Do you already have an account?</p>
              <div className="radio flex flex-col gap-2 mt-3">
                <div className="flex items-center gap-2">
                  <Radio
                    id="yes"
                    name="countries"
                    value="Yes"
                    className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                    onClick={() => {
                      handleInternetConfirmation(true, "internet"),
                      setUtilityManage((prev) => ({
                        ...prev,
                        utility_name: "internet",
                        manage_allow: true,
                      }));
                    }}
                  />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="no"
                    name="countries"
                    value="No"
                    className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                    onClick={() => {
                      handleInternetConfirmation(false, "internet"),
                      setUtilityManage((prev) => ({
                        ...prev,
                        utility_name: "internet",
                        manage_allow: false,
                      }));
                    }}
                  />
                  <Label htmlFor="no">No - please organize this for me</Label>
                </div>
              </div>
            </div>
          </div>
          <DynamicUtilites />
        </div>
      </div>
    </div>
  );
};

export default UtilityDetails;
