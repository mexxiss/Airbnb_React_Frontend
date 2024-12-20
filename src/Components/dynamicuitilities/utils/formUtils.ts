export interface Field {
  name: string;
  type: string;
  label: string;
  options?: { value: string; label: string }[];
}

export interface Utility {
  id: number | string;
  name: string;
  fields: Field[];
}

export interface ApiUtility {
  name: string;
  [key: string]: any; // Allow other properties from the API response
}

/**
 * Generates initial values for the form based on utilities and API data.
 * @param utilities Array of utility definitions
 * @param utilityData Array of API utility data
 * @returns Initial form values as an object
 */
export const generateInitialValues = (
  utilities: Utility[],
  utilityData: ApiUtility[]
): Record<string, string> => {
  return utilities.reduce((acc, utility) => {
    const apiUtility = utilityData.find((data) => data.name === utility.name);
    utility.fields.forEach((field) => {
      if (apiUtility) {
        acc[`${utility.name}-${field.name}`] =
          field.name === "provider_name"
            ? field.options?.find(
                (option) => option.label === apiUtility[field.name]
              )?.value || ""
            : apiUtility[field.name] || "";
      } else {
        acc[`${utility.name}-${field.name}`] = "";
      }
    });
    return acc;
  }, {} as Record<string, string>);
};

/**
 * Formats form values into an array of utility data objects.
 * @param utilities Array of utility definitions
 * @param values Formik form values
 * @returns Formatted utility data
 */
export const formatFormData = (
  utilities: Utility[],
  values: Record<string, string>
): ApiUtility[] => {
  return utilities.map((utility) => {
    const utilityData: ApiUtility = { name: utility.name };
    utility.fields.forEach((field) => {
      utilityData[field.name] = values[`${utility.name}-${field.name}`];
    });
    return utilityData;
  });
};
