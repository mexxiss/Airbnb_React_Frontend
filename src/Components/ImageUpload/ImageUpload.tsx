import React from "react";
import { useField, useFormikContext } from "formik";

interface ImageUploadProps {
  name: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const newImages = filesArray.map((file) => ({
        file,
        preview: URL.createObjectURL(file), // For previewing new images
        isNew: true, // Distinguish new images from existing ones
      }));
      setFieldValue(name, [...field.value, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = field.value.filter(
      (_: any, i: number) => i !== index
    );
    setFieldValue(name, updatedImages);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      <div className="image-preview-container">
        {field.value.map((image: any, index: number) => (
          <div key={index} className="image-preview">
            <img
              src={image.isNew ? image.preview : image} // Use `preview` for new images and URL for existing ones
              alt={`preview-${index}`}
              style={{ width: "100px", height: "100px" }}
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              style={{ display: "block", margin: "10px auto" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};

export default ImageUpload;
