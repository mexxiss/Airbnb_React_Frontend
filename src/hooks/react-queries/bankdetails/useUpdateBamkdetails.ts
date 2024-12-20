import { useMutation } from "@tanstack/react-query";
import { showToast } from "../../../utils/toaster/toastWrapper";
import { updatePaymentDetails } from "../../../services/apiServices";
import { PaymentDetails } from "../../../types/paymentsTypes";

export const useUpdateBamkdetails = () => {
  return useMutation({
    mutationFn: (data: PaymentDetails) => updatePaymentDetails(data),
    onSuccess: () => {
      showToast("success", "Bank Details Updated successful!");
    },
    onError: (error: any) => {
      showToast(
        "error",
        error?.response?.data?.message || "Bank Details Updated failed"
      );
    },
  });
};
