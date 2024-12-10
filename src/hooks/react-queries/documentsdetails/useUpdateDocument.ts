import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDocument } from "../../../services/apiServices";
import { showToast } from "../../../utils/toaster/toastWrapper";

export const useUpdateDocument = () => {
  return useMutation({
    mutationFn: (params: { id: string; uploads: Partial<any> }) =>
      updateDocument(params.id, params.uploads),
    onSuccess: (data, { id }) => {
      showToast("success", "Document Updated successful!");
    },
    onError: (error) => {
      console.error("Failed to update document:", error);
    },
  });
};
