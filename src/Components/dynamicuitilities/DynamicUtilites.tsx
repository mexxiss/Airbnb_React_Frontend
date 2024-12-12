import { DeleteOutline } from "@mui/icons-material";
import { Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import Select from "../CommonField/Select";
import Input from "../CommonField/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { apiData } from "../../utils/mock/mock";

const DynamicUtilities = () => {
  const providerData = useSelector((state: RootState) => state.providers);

  const paidOptions = [
    { value: "Frankporter", label: "Frankporter" },
    { value: "Owner", label: "Owner" },
  ];

  const createUtilityFields = (type: string) => [
    {
      name: "provider_name",
      type: "select",
      label: "Select Provider",
      options: providerData?.[type]?.service_providers.map((provider) => ({
        label: provider.name,
        value: provider.name,
      })),
    },
    { name: "account_no", type: "text", label: "Account Number" },
    { name: "paid_by", type: "select", label: "Paid By", options: paidOptions },
    { name: "web_login", type: "text", label: "Web Login" },
    { name: "web_pass", type: "password", label: "Web Password" },
  ];

  const defaultUtilities = [
    {
      id: Date.now() + 1,
      name: "Internet",
      fields: createUtilityFields("internet"),
    },
    {
      id: Date.now() + 2,
      name: "Electricity/Water",
      fields: createUtilityFields("electricity_water"),
    },
    { id: Date.now() + 3, name: "Gas", fields: createUtilityFields("gas") },
    {
      id: Date.now() + 4,
      name: "Chiller",
      fields: createUtilityFields("chiller"),
    },
  ];

  const [utilities, setUtilities] = useState(defaultUtilities);

  const initializeFormikValues = (utilitiesList: any[]) =>
    utilitiesList.reduce((acc, utility) => {
      const apiUtility = apiData.find((data) => data.name === utility.name);
      utility.fields.forEach((field) => {
        if (apiUtility) {
          acc[`${utility.name}-${field.name}`] =
            field.name === "provider_name"
              ? field.options.find(
                  (option) => option.label === apiUtility[field.name]
                )?.value || ""
              : apiUtility[field.name] || "";
        } else {
          acc[`${utility.name}-${field.name}`] = "";
        }
      });
      return acc;
    }, {});

  const formik = useFormik({
    initialValues: initializeFormikValues(defaultUtilities),
    onSubmit: (values) => {
      const formattedData = utilities
        .filter(
          (utility) =>
            apiData.some((data) => data.name === utility.name) ||
            utility.name.includes("Utility")
        )
        .map((utility) => {
          const utilityData: any = { name: utility.name };
          utility.fields.forEach((field) => {
            utilityData[field.name] = values[`${utility.name}-${field.name}`];
          });
          return utilityData;
        });
      console.log("Filtered Form Submitted:", formattedData);
    },
  });

  const handleAddUtility = () => {
    const newUtility = {
      id: Date.now(),
      name: `Utility ${utilities.length + 1}`,
      fields: createUtilityFields("other"),
    };
    setUtilities([...utilities, newUtility]);
    formik.setValues({
      ...formik.values,
      ...initializeFormikValues([newUtility]),
    });
  };

  const handleRemoveUtility = (id: number) => {
    const updatedUtilities = utilities.filter((utility) => utility.id !== id);
    setUtilities(updatedUtilities);
    const updatedValues = { ...formik.values };
    utilities.find((utility) => utility.id === id);

    formik.setValues(updatedValues);
  };

  return (
    <div>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {utilities.map((utility) => (
              <div
                key={utility.id}
                className="border border-primary px-4 pt-4 pb-6"
              >
                <div className="flex flex-row justify-between">
                  <h5 className="text-2xl text-gray-800">{utility.name}</h5>
                  {utility.name.includes("Utility") && (
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => handleRemoveUtility(utility.id)}
                    >
                      <DeleteOutline />
                    </button>
                  )}
                </div>
                <hr className="my-3 border-primary" />
                {utility.fields.map((field, index) => (
                  <div key={index} className="grid grid-cols-1 gap-4">
                    {field.type === "select" ? (
                      <Select
                        name={`${utility.name}-${field.name}`}
                        label={field.label}
                        options={field.options}
                        value={formik.values[`${utility.name}-${field.name}`]}
                      />
                    ) : (
                      <Input
                        name={`${utility.name}-${field.name}`}
                        type={field.type}
                        label={field.label}
                        value={formik.values[`${utility.name}-${field.name}`]}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
            <button
              type="button"
              className="btn1 mt-4"
              onClick={handleAddUtility}
            >
              Add New Utility
            </button>
          </div>
          <button type="submit" className="btn1 mt-6">
            Save Utilities
          </button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default DynamicUtilities;
