import { DeleteOutline } from "@mui/icons-material";
import { Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import Select from "./../CommonField/Select";
import Input from "./../CommonField/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { apiData } from "../../utils/mock/mock";

const DynamicUtilites = () => {
  const providerData = useSelector((state: RootState) => state.providers);
  const paidOptions = [
    {
      value: "Frankporter",
      label: "Frankporter",
    },
    {
      value: "Owner",
      label: "Owner",
    },
  ];

  const defaultUtilities = [
    {
      id: Date.now() + 1,
      name: "Internet",
      fields: [
        {
          name: "provider_name",
          type: "select",
          label: "Select Provider",
          options: providerData?.internet?.service_providers.map(
            (provider) => ({
              label: provider.name,
              value: provider.name,
            })
          ),
        },
        { name: "account_no", type: "text", label: "Account Number" },
        {
          name: "paid_by",
          type: "select",
          label: "Paid By",
          options: paidOptions,
        },
        { name: "web_login", type: "text", label: "Web Login" },
        { name: "web_pass", type: "password", label: "Web Password" },
      ],
    },
    {
      id: Date.now() + 2,
      name: "Electricity/Water",
      fields: [
        {
          name: "provider_name",
          type: "select",
          label: "Select Provider",
          options: providerData?.electricity_water?.service_providers.map(
            (provider) => ({
              label: provider.name,
              value: provider.name,
            })
          ),
        },
        { name: "account_no", type: "text", label: "Account Number" },
        {
          name: "paid_by",
          type: "select",
          label: "Paid By",
          options: paidOptions,
        },
        { name: "web_login", type: "text", label: "Web Login" },
        { name: "web_pass", type: "password", label: "Web Password" },
      ],
    },
    {
      id: Date.now() + 3,
      name: "Gas",
      fields: [
        {
          name: "provider_name",
          type: "select",
          label: "Select Provider",
          options: providerData?.gas?.service_providers.map((provider) => ({
            label: provider.name,
            value: provider.name,
          })),
        },
        { name: "account_no", type: "text", label: "Account Number" },
        {
          name: "paid_by",
          type: "select",
          label: "Paid By",
          options: paidOptions,
        },
        { name: "web_login", type: "text", label: "Web Login" },
        { name: "web_pass", type: "password", label: "Web Password" },
      ],
    },
    {
      id: Date.now() + 4,
      name: "Chiller",
      fields: [
        {
          name: "provider_name",
          type: "select",
          label: "Select Provider",
          options: providerData?.chiller?.service_providers.map((provider) => ({
            label: provider.name,
            value: provider.name,
          })),
        },
        { name: "account_no", type: "text", label: "Account Number" },
        {
          name: "paid_by",
          type: "select",
          label: "Paid By",
          options: paidOptions,
        },
        { name: "web_login", type: "text", label: "Web Login" },
        { name: "web_pass", type: "password", label: "Web Password" },
      ],
    },
  ];

  const [utilities, setUtilities] = useState<any>(defaultUtilities);

  const handleAddUtility = () => {
    const newUtility = {
      id: Date.now(),
      name: `Utility ${utilities.length + 1}`,
      fields: [
        {
          name: "provider_name",
          type: "select",
          label: "Select Provider",
          options: providerData?.other?.service_providers.map((provider) => ({
            label: provider.name,
            value: provider.name,
          })),
        },
        { name: "account_no", type: "text", label: "Account Number" },
        {
          name: "paid_by",
          type: "select",
          label: "Paid By",
          options: paidOptions,
        },
        { name: "web_login", type: "text", label: "Web Login" },
        { name: "web_pass", type: "password", label: "Web Password" },
      ],
    };
    setUtilities([...utilities, newUtility]);
  };

  const handleRemoveUtility = (id: any) => {
    setUtilities(utilities.filter((utility: any) => utility.id !== id));
  };

  const formik = useFormik({
    initialValues: utilities.reduce((acc: any, utility: any) => {
      const apiUtility = apiData.find((data) => data.name === utility.name);
      utility.fields.forEach((field: any) => {
        if (apiUtility) {
          if (field.name === "provider_name") {
            const selectedProvider = apiUtility[field.name];
            const matchedOption = field.options.find(
              (option: any) => option.label === selectedProvider
            );
            acc[`${utility.name}-${field.name}`] = matchedOption
              ? matchedOption.value
              : "";
          } else {
            acc[`${utility.name}-${field.name}`] = apiUtility[field.name] || "";
          }
        } else {
          acc[`${utility.name}-${field.name}`] = "";
        }
      });

      return acc;
    }, {}),
    onSubmit: (values) => {
      const formattedData = utilities
        .filter((utility: any) => {
          const utilityApiData = apiData.find(
            (data) => data.name === utility.name
          );
          return utilityApiData?.name || utility?.name?.includes("Utility");
        })
        .map((utility: any) => {
          const utilityData: any = { name: utility.name };
          utility.fields.forEach((field: any) => {
            utilityData[field.name] = values[`${utility.name}-${field.name}`];
          });
          return utilityData;
        });

      console.log("Filtered Form Submitted:", formattedData);
    },
  });

  return (
    <div>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {utilities
              .filter((utility: any) => {
                const utilityApiData = apiData.find(
                  (data) => data.name === utility.name
                );
                return (
                  utilityApiData?.name || utility?.name?.includes("Utility")
                );
              })
              .map((utility: any) => {
                return (
                  <div
                    key={utility.id}
                    className="border border-primary px-4 pt-4 pb-6"
                  >
                    <div className="flex flex-row justify-between">
                      <h5 className="text-2xl text-gray-800">{utility.name}</h5>
                      {utility.name &&
                        typeof utility.name === "string" &&
                        utility.name.includes("Utility") && (
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
                    {utility.fields.map((field: any, index: number) => (
                      <div key={index} className="grid grid-cols-1 gap-4">
                        {field.type === "select" ? (
                          <Select
                            name={`${utility.name}-${field.name}`}
                            label={field.label}
                            options={field.options}
                            value={
                              formik.values[`${utility.name}-${field.name}`] ||
                              ""
                            }
                            // onChange={formik.handleChange}
                          />
                        ) : (
                          <Input
                            name={`${utility.name}-${field.name}`}
                            type={field.type}
                            label={field.label}
                            value={
                              formik.values[`${utility.name}-${field.name}`] ||
                              ""
                            }
                            // onChange={formik.handleChange}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}

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

export default DynamicUtilites;
