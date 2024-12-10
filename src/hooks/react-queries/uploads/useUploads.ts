import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../../../services/apiServices";

export const useUploadFile = () => {
  return useMutation({
    mutationFn: (data: { file: File | string; folder: string }) =>
      uploadFile(data.file, data.folder),
    onError: (error) => {
      console.error("File upload failed:", error);
    },
    onSuccess: (data) => {
      console.log("File uploaded successfully:", data);
      // You can handle success, for example, display a success message or update state
    },
  });
};
