import { useMutation } from "@tanstack/react-query";
import { showToast } from "../../../utils/toaster/toastWrapper";
import { updatePropertyUtilities } from "../../../services/apiServices";
import { UtilityUpdate } from "../../../types/uiltiliyProvidersTypes";

export const useUpdateServiceUtilities = () => {
  return useMutation({
    mutationFn: (data: { propertyId: string; updates: UtilityUpdate[] }) =>
      updatePropertyUtilities(data.propertyId, data.updates),
    onSuccess: () => {
      showToast("success", "Utilities updated successfully!");
    },
    onError: (error: any) => {
      showToast(
        "error",
        error?.response?.data?.message || "Failed to update utilities."
      );
    },
  });
};
