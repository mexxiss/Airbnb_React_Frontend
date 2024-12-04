import { useMutation } from "@tanstack/react-query";
import { showToast } from "../../../utils/toaster/toastWrapper";
import { logOut } from "../../../services/apiServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearLoginData } from "../../../store/features/authSlice";

export const usePostLogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: logOut,
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
