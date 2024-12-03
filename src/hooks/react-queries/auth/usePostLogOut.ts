import { useMutation } from "@tanstack/react-query";
import { showToast } from "../../../utils/toaster/toastWrapper";
import { login } from "../../../services/apiServices";
import { LoginFormInputs } from "../../../types/loginTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLoginData } from "../../../store/features/authSlice";

export const usePostLogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data: LoginFormInputs) => login(data),
    onSuccess: () => {
      showToast("success", "LogOut successful!");
      dispatch(clearLoginData());
      navigate("/login");
    },
    onError: (error: any) => {
      showToast("error", error?.response?.data?.message || "Login failed");
    },
  });
};
