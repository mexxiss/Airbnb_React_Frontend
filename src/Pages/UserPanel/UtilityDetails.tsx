import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Label, Radio } from "flowbite-react";
import { Link } from "react-router-dom";
import ConfirmDialog from "../../Components/Dialogs/ConfirmDialog";
import Input from "../../Components/CommonField/Input";
import { Form, FormikProvider, useFormik } from "formik";
import Select from "../../Components/CommonField/Select";

const UtilityDetails = () => {
  const handleInternetConfirmation = () => {
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
  const options = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
    {
      value: "Unknown",
      label: "Unknown",
    },
    {
      value: "No Internet",
      label: "No Internet",
    },
  ];
  const paidOptions = [
    {
      value: "Frankporter",
      label: "Frankporter",
    },
    {
      value: "Owner",
      label: "Owner",
    },
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
                    onClick={handleInternetConfirmation}
                  />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="no"
                    name="countries"
                    value="No"
                    className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                  />
                  <Label htmlFor="no">No - please organize this for me</Label>
                </div>
              </div>
            </div>
            <div className="border border-primary px-4 pt-4 pb-6">
              <h6 className="text-2xl text-gray-800">Electricity/water</h6>
              <hr className="my-3 border-primary" />
              <p>Do you already have an account?</p>
              <div className="radio flex flex-col gap-2 mt-3">
                <div className="flex items-center gap-2">
                  <Radio
                    id="yes"
                    name="countries"
                    value="Yes"
                    className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                    onClick={handleInternetConfirmation}
                  />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="no"
                    name="countries"
                    value="No"
                    className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                  />
                  <Label htmlFor="no">No - please organize this for me</Label>
                </div>
              </div>
            </div>
            <div className="border border-primary px-4 pt-4 pb-6">
              <h6 className="text-2xl text-gray-800">Gas</h6>
              <hr className="my-3 border-primary" />
              <p>Do you already have an account?</p>
              <div className="radio flex flex-col gap-2 mt-3">
                <div className="flex items-center gap-2">
                  <Radio
                    id="yes"
                    name="countries"
                    value="Yes"
                    className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                    onClick={handleInternetConfirmation}
                  />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="no"
                    name="countries"
                    value="No"
                    className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                    defaultChecked
                  />
                  <Label htmlFor="no">No - please organize this for me</Label>
                </div>
              </div>
              {/* If No */}
              <div className="mt-5">
                <FormikProvider value={formik}>
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Input
                          inputClass="!py-2"
                          name="email"
                          type="email"
                          label="Email"
                          value=""
                        />
                        <p className="text-xs mt-2 text-gray-500">
                          Please upload your documents in the document section
                          so we can proceed with the application
                        </p>
                      </div>
                      <Select
                        options={paidOptions}
                        name="paidBy"
                        label="Paid By"
                        value=""
                      />
                    </div>
                  </Form>
                </FormikProvider>
              </div>
            </div>
            <div className="border border-primary px-4 pt-4 pb-6">
              <h6 className="text-2xl text-gray-800">Chiller</h6>
              <hr className="my-3 border-primary" />
              {/* If Yes */}
              <div>
                <FormikProvider value={formik}>
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                      <Select
                        options={options}
                        name="selectProvider"
                        label="Select Provider"
                        value=""
                      />
                      <Input
                        inputClass="!py-2"
                        name="accNo"
                        type="text"
                        label="Account Number"
                        value=""
                      />
                      <Select
                        options={paidOptions}
                        name="paidBy"
                        label="Paid By"
                        value=""
                      />
                      <Input
                        inputClass="!py-2"
                        name="webLogin"
                        type="text"
                        label="Web Login"
                        value=""
                      />
                      <Input
                        inputClass="!py-2"
                        name="webPassword"
                        type="text"
                        label="Web Password"
                        value=""
                      />
                    </div>
                  </Form>
                </FormikProvider>
              </div>
            </div>
            <div className="border border-primary px-4 pt-4 pb-6 flex items-center justify-center">
              <button className="btn1 w-full !rounded-none">
                Add New Utility
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button className="btn1 !rounded-none">Save Section</button>
        </div>
      </div>
    </div>
  );
};

export default UtilityDetails;
