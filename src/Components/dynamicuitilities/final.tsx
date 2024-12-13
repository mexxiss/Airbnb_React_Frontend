import { DeleteOutline } from "@mui/icons-material";
import { Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import Select from "./../CommonField/Select";
import Input from "./../CommonField/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { createUtilityFields, paidOptions } from "../../utils/common";
import { useUpdateServiceUtilities } from "../../hooks/react-queries/providersservices";
import { useParams } from "react-router-dom";
import { formatFormData, generateInitialValues } from "./utils/formUtils";
import { createDefaultUtilities } from "./utils/defaultUtilities";
import { setFetchUtilities } from "../../store/features/utilitiesSlice";

const DynamicUtilites = () => {
  const providerData = useSelector((state: RootState) => state.providers);
  const utilityData = useSelector(
    (state: RootState) => state.utilities.utilities
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  const { mutate: updateUtilities, isPending } = useUpdateServiceUtilities();

  const defaultUtilities = createDefaultUtilities(
    providerData,
    paidOptions,
    utilityData
  );

  const [utilities, setUtilities] = useState<any>(defaultUtilities);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleAddUtility = () => {
    const newUtility = {
      id: Date.now(),
      name: `Utility ${utilities.length + 1}`,
      fields: createUtilityFields("other", providerData),
    };
    setUtilities([...utilities, newUtility]);
  };

  const handleRemoveUtility = (id: any) => {
    setUtilities(utilities.filter((utility: any) => utility.id !== id));
    setIsFormDirty(true);
  };

  const formik = useFormik({
    initialValues: generateInitialValues(utilities, utilityData),
    onSubmit: (values) => {
      const formattedData: any = formatFormData(utilities, values);
      updateUtilities(
        { propertyId: id || "", updates: formattedData },
        {
          onSuccess(data) {
            if (data) {
              dispatch(setFetchUtilities(data?.results));
            }
            console.log("updatedmodaldata", { data });
          },
        }
      );
    },
  });

  const handleChange = (event: any) => {
    formik.handleChange(event);
    setIsFormDirty(true);
  };

  return (
    <div>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit} onChange={handleChange}>
          <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {utilities.map((utility: any) => {
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
                            formik.values[`${utility.name}-${field.name}`] || ""
                          }
                        />
                      ) : (
                        <Input
                          name={`${utility.name}-${field.name}`}
                          type={field.type}
                          label={field.label}
                          value={
                            formik.values[`${utility.name}-${field.name}`] || ""
                          }
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

          <button type="submit" className="btn1 mt-6" disabled={!isFormDirty}>
            {isPending ? "Saving..." : "Save Utilities"}
          </button>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default DynamicUtilites;
