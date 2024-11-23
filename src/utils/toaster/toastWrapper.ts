import { toast } from "react-toastify";

// Wrapper for dynamic toast messages
export const showToast = (
  type: "success" | "error" | "info" | "warning",
  message: string
) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
      });
      break;
    case "info":
      toast.info(message, {
        position: "top-right",
        autoClose: 3000,
      });
      break;
    case "warning":
      toast.warning(message, {
        position: "top-right",
        autoClose: 3000,
      });
      break;
    default:
      break;
  }
};
