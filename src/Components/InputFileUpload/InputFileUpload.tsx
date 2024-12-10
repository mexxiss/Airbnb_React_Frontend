import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload() {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]); // You can append multiple files if required

      try {
        const response = await axios.post("/upload/single", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("File uploaded successfully:", response.data);
        alert("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload file. Please try again.");
      }
    }
  };

  return (
    <Button
      className="h-9 rounded-md uppercase text-sm bg-primary text-white"
      component="label"
      role={undefined}
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload
      <VisuallyHiddenInput type="file" onChange={handleFileChange} />
    </Button>
  );
}
