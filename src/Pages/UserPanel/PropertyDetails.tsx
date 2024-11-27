import { EditOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Form, FormikProvider, useFormik } from "formik";
import { Link } from "react-router-dom";
import Input from "../../Components/CommonField/Input";

const PropertyDetails = () => {
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
  return (
    <div>
      {/* Breadcrumb */}
      <div>
        <ul className="text-sm text-gray-500 flex items-center gap-1">
          <li>
            <Link to="/user-panel/settings" className="hover:underline">
              Settings
            </Link>
          </li>
          <li>
            <KeyboardArrowRightOutlined className="!text-xl" />
          </li>
          <li>
            <span className="text-gray-800">Property Details</span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="text-4xl text-gray-600">
          B110 - B202 Wavez Residence, Dubai Land, Dubai, UAE.
        </h4>
        <hr className="my-5 border-primary" />
        <div className="">
          <div>
            <h6 className="text-2xl text-primary uppercase tracking-wide">
              Personal Details
            </h6>
            <div className="py-6 px-5 border border-primary bg-primary bg-opacity-5 mt-2">
              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <div className="col-span-2 lg:col-span-3 xl:col-span-4">
                      <Input
                        name="fullAddress"
                        type="text"
                        label="Full Address"
                        value="-"
                        disabled
                      />
                    </div>
                    <Input
                      name="parkNum"
                      type="text"
                      label="Parking Number"
                      value="-"
                      disabled
                    />
                    <Input
                      name="permitCode"
                      type="text"
                      label="Permit Code"
                      value="-"
                      disabled
                    />
                    <Input
                      name="permitExpDate"
                      type="text"
                      label="Permit Expiry Date"
                      value="-"
                      disabled
                    />
                    <Input
                      name="wifiName"
                      type="text"
                      label="Wifi Name"
                      value="-"
                      disabled
                    />
                    <Input
                      name="wifiPassword"
                      type="text"
                      label="Wifi Password"
                      value="-"
                      disabled
                    />
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-4">
              <h6 className="text-2xl text-primary uppercase tracking-wide">
                Utilities Details
              </h6>
              <Link
                to="/user-panel/settings/property-details/update-utility-details"
                className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center"
              >
                <EditOutlined className="!text-lg" />
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-4">
              <h6 className="text-2xl text-primary uppercase tracking-wide">
                Bank Details
              </h6>
              <button className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center">
                <EditOutlined className="!text-lg" />
              </button>
            </div>
            <div className="py-6 px-5 border border-primary bg-primary bg-opacity-5 mt-2">
              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <Input
                      name="accName"
                      type="text"
                      label="Account Name"
                      value="Surinder Paul Saini"
                      disabled
                    />
                    <Input
                      name="bankName"
                      type="text"
                      label="Bank Name"
                      value="Mashreq Bank"
                      disabled
                    />
                    <Input
                      name="currency"
                      type="text"
                      label="Currency"
                      value="AED"
                      disabled
                    />
                    <div className="col-span-2 lg:col-span-3 xl:col-span-4">
                      <Input
                        name="iban"
                        type="text"
                        label="IBAN"
                        value="ABCD1234567"
                        disabled
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-3 xl:col-span-4">
                      <Input
                        name="accNumber"
                        type="text"
                        label="Account Number"
                        value="123456789"
                        disabled
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-3 xl:col-span-4">
                      <Input
                        name="bankAddress"
                        type="text"
                        label="Bank Address"
                        value="-"
                        disabled
                      />
                    </div>
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
          <div className="mt-10">
            <h6 className="text-2xl text-primary uppercase tracking-wide">
              Documents
            </h6>
            <div className="grid grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-5 mt-3">
              <div className="border border-primary rounded-xl flex flex-col justify-between pb-3">
                <div>
                  <div className="border-b border-primary text-primary text-xl py-2 px-3">
                    Deva Bill
                  </div>
                  <div className="mt-4 flex flex-col gap-3 px-3">
                    <div>
                      <p className="text-lg text-gray-600">Expiry Date</p>
                      <p className="text-primary">-</p>
                    </div>
                    <div>
                      <p className="text-lg text-gray-600">Note</p>
                      <p className="text-primary">-</p>
                    </div>
                  </div>
                </div>
                <div className="px-3 mt-6 grid grid-cols-2 gap-3 ">
                  <button className="h-9 rounded-md uppercase text-sm bg-primary text-white">
                    Upload
                  </button>
                </div>
              </div>
              <div className="border border-primary rounded-xl flex flex-col justify-between pb-3">
                <div>
                  <div className="border-b border-primary text-primary text-xl py-2 px-3">
                    Passport
                  </div>
                  <div className="mt-4 flex flex-col gap-3 px-3">
                    <div>
                      <p className="text-lg text-gray-600">Expiry Date</p>
                      <p className="text-primary">-</p>
                    </div>
                    <div>
                      <p className="text-lg text-gray-600">Note</p>
                      <p className="text-primary">-</p>
                    </div>
                    <div>
                      <p className="text-lg text-gray-600">Document</p>
                      <p className="text-primary">qwertyui.png</p>
                    </div>
                  </div>
                </div>
                <div className="px-3 mt-6 grid grid-cols-2 gap-3 ">
                  <button className="h-9 rounded-md uppercase text-sm bg-primary text-white">
                    Upload
                  </button>
                  <button className="h-9 rounded-md uppercase text-sm border border-primary text-primary">
                    Download
                  </button>
                </div>
              </div>
              <div className="border border-primary rounded-xl flex flex-col justify-between pb-3">
                <div>
                  <div className="border-b border-primary text-primary text-xl py-2 px-3">
                    Title Deed
                  </div>
                  <div className="mt-4 flex flex-col gap-3 px-3"></div>
                </div>
                <div className="px-3 mt-6 grid grid-cols-2 gap-3 ">
                  <button className="h-9 rounded-md uppercase text-sm bg-primary text-white">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
