import { useMutation } from "@tanstack/react-query";
import { showToast } from "../../../utils/toaster/toastWrapper";
import { changePassword } from "../../../services/apiServices";
import { ChangePasswordProps } from "../../../types/loginTypes";

export const usePostChangePassword = () => {
  return useMutation({
    mutationFn: (data: ChangePasswordProps) => changePassword(data),
    onSuccess: (data) => {
      showToast("success", "Password Changed successful!");
    },
    onError: (error: any) => {
      showToast(
        "error",
        error?.response?.data?.message || "Change Passored failed"
      );
    },
  });
};
