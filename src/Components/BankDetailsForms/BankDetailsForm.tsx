import { Form, FormikProvider, useFormik } from "formik";
import React, { useCallback, useEffect, useMemo } from "react";
import { EditOutlined } from "@mui/icons-material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Input from "../CommonField/Input";
import {
  useFetchBanksDetails,
  useUpdateBamkdetails,
} from "../../hooks/react-queries/bankdetails";
import { setPaymentDetails } from "../../store/features/paymentDetailsSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ErrorHandleMessage from "../ErrorHandleComponent/ErrorHandleMessage";
import Loader from "../Loader/Loader";
import { RootState } from "../../store/store";
import { useToggle } from "../../hooks/custom-hook/useToggle";
import { PaymentDetails } from "../../types/paymentsTypes";

const BankDetailsForm = () => {
  const { id } = useParams();
  const [isOpen, toggleOpen] = useToggle();

  const dispatch = useDispatch();
  const { data, isLoading, error, isError } = useFetchBanksDetails();
  const updateUserMutation = useUpdateBamkdetails();
  const bankdetailData = useMemo(() => data, [data]);

  const memoizedDispatchBank = useCallback(() => {
    if (bankdetailData) {
      dispatch(setPaymentDetails(bankdetailData as any));
    }
  }, [bankdetailData, dispatch]);

  useEffect(() => {
    memoizedDispatchBank();
  }, [memoizedDispatchBank]);

  const paymentDetailsData = useSelector(
    (state: RootState) => state.paymentDetails.data
  );

  const initialValues = {
    accountHolderName: paymentDetailsData?.accountHolderName,
    accountNumber: paymentDetailsData?.accountNumber,
    bankName: paymentDetailsData?.bankName,
    iban: paymentDetailsData?.iban,
    swiftCode: paymentDetailsData?.swiftCode,
    paymentMethod: paymentDetailsData?.paymentMethod,
    address: paymentDetailsData?.address,
    currency: paymentDetailsData?.currency,
  };

  const formik = useFormik({
    //+
    initialValues, //+
    onSubmit: async (values) => {
      try {
        const updates = {
          ...paymentDetailsData,
          ...values,
        };
        console.log({ updates });

        updateUserMutation.mutate(updates as PaymentDetails);
        dispatch(setPaymentDetails(updates as PaymentDetails));
      } catch (error) {
        console.error("Failed to update user details:", error);
        alert("Failed to update details. Please try again.");
      }
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error?.message} />;
  }
  return (
    <>
      <div className="flex items-center gap-4">
        <h6 className="text-lg sm:text-xl md:text-2xl text-primary uppercase tracking-wide">
          Bank Details
        </h6>
        {!isOpen ? (
          <button
            className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center"
            onClick={() => {
              toggleOpen(!isOpen);
            }}
          >
            <EditOutlined className="!text-lg" />
          </button>
        ) : (
          <button
            className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center"
            onClick={() => {
              toggleOpen(!isOpen);
              formik.submitForm();
            }}
          >
            <SaveAsIcon className="!text-lg" />
          </button>
        )}
      </div>
      <div className="py-6 px-5 border border-primary bg-primary bg-opacity-5 mt-2">
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <Input
                name="accountHolderName"
                type="text"
                label="Account Name"
                value={formik.values.accountHolderName || "-"}
                disabled={!isOpen}
              />
              <Input
                name="bankName"
                type="text"
                label="Bank Name"
                value={formik.values.bankName || "-"}
                disabled={!isOpen}
              />
              <Input
                name="currency"
                type="text"
                label="Currency"
                value={formik.values.currency || "-"}
                disabled={!isOpen}
              />
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
                <Input
                  name="iban"
                  type="text"
                  label="IBAN"
                  value={formik.values.iban || "-"}
                  disabled={!isOpen}
                />
              </div>
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
                <Input
                  name="accountNumber"
                  type="text"
                  label="Account Number"
                  value={formik.values.accountNumber || "-"}
                  disabled={!isOpen}
                />
              </div>
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
                <Input
                  name="address"
                  type="text"
                  label="Bank Address"
                  value={formik.values.address || "-"}
                  disabled={!isOpen}
                />
              </div>
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
                <Input
                  name="swiftCode"
                  type="text"
                  label="Swift Code"
                  value={formik.values.swiftCode || "-"}
                  disabled={!isOpen}
                />
              </div>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </>
  );
};

export default BankDetailsForm;
