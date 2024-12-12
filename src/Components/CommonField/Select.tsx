import { useFormikContext } from "formik";
import React from "react";
import classNames from "classnames";

interface ISelect {
  name: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  inputClass?: string; //  i am taking label class, input class in differnet because of tailwind , as passing tailwind class is easy as compared to giving parent class and writing manual css
  labelClass?: string;
  options: option[];
}

type option = {
  label: string;
  value: string;
};

const Select: React.FC<ISelect> = ({
  name,
  options,
  label,
  value,
  placeholder,
  inputClass,
  labelClass,
}) => {
  const { handleBlur, handleChange, values } = useFormikContext();

  return (
    <div>
      {!!label && (
        <label
          htmlFor={name}
          className={classNames("text-[15px] text-[#040404]", labelClass)}
        >
          {label}
        </label>
      )}
      <select
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        id={name}
        className={classNames(
          "py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-2 w-full rounded bg-[#F7F8FF]",
          inputClass
        )}
        value={(values as { [key: string]: string })?.[name] || ""}
      >
        <option value="" disabled>
          Select {placeholder}
        </option>
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
