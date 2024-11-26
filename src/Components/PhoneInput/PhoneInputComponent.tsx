import React from "react";
import PhoneInput from "react-phone-input-2";
import { icon29 } from "../../assets/icons";

import { Controller, Control } from "react-hook-form";

interface PhoneInputProps {
  name: string;
  control: Control<any>;
  defaultCountry?: string;
  errorMessage?: string;
}

const PhoneInputComponent: React.FC<PhoneInputProps> = ({
  name,
  control,
  defaultCountry = "IN",
  errorMessage,
}) => {
  return (
    <div className="phoneInput">
      <div className="bg-[#fef4e3] rounded-full flex items-center justify-between px-6 gap-2 h-12">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <PhoneInput
                {...field}
                value={field?.value || ""}
                country={defaultCountry} // Set default country
                placeholder="Enter phone number"
                onChange={(value) => field.onChange(value)} // Update value in form state
                inputProps={{
                  required: true,
                }}
              />
            </>
          )}
        />
        <span>
          <img src={icon29} className="w-4" />
        </span>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm ml-3 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default PhoneInputComponent;
