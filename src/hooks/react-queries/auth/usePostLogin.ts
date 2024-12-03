import { useMutation } from "@tanstack/react-query";
import { showToast } from "../../../utils/toaster/toastWrapper";
import { login } from "../../../services/apiServices";
import { LoginFormInputs } from "../../../types/loginTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../../store/features/authSlice";

export const usePostLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data: LoginFormInputs) => login(data),
    onSuccess: (data) => {
      showToast("success", "Login successful!");
      dispatch(setLoginData(data));
      navigate("/user-panel/properties");
    },
    onError: (error: any) => {
      showToast("error", error?.response?.data?.message || "Login failed");
    },
  });
};
