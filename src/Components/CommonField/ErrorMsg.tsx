import React from "react";
import { ErrorMessage } from "formik";

interface ICustomError {
  name: string;
  showError?: boolean;
}
const CustomError: React.FC<ICustomError> = ({ name, showError = true }) => {
  return (
    <div className="text-red-700 text-xs">
      {showError && <ErrorMessage name={name} />}
    </div>
  );
};

export default CustomError;
