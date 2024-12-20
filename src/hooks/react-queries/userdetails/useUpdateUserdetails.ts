import { useMutation } from "@tanstack/react-query";
import { showToast } from "../../../utils/toaster/toastWrapper";
import { updateUserDetails } from "../../../services/apiServices";
import { UserDetails } from "../../../types/userDetailsTypes";

export const useUpdateUserdetails = () => {
  return useMutation({
    mutationFn: (data: UserDetails) => updateUserDetails(data),
    onSuccess: () => {
      showToast("success", "User Details Updated successful!");
    },
    onError: (error: any) => {
      showToast(
        "error",
        error?.response?.data?.message || "User Details Updated failed"
      );
    },
  });
};
