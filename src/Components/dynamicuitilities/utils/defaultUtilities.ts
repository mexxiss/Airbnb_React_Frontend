import { Utility, Field } from "./formUtils"; // Ensure proper typings

interface ProviderData {
  internet?: { service_providers: { name?: string }[] } | null;
  electricity_water?: { service_providers: { name?: string }[] } | null;
  gas?: { service_providers: { name?: string }[] } | null;
  chiller?: { service_providers: { name?: string }[] } | null;
  [key: string]: { service_providers?: { name?: string }[] } | null | undefined; // To allow additional dynamic keys
}

interface UtilityData {
  _id: string;
  name: string;
  type: string;
}

/**
 * Generate utility fields dynamically based on type.
 */
const generateUtilityFields = (
  type: string,
  providerData: ProviderData,
  paidOptions: { value: string; label: string }[]
): Field[] => {
  const serviceProviders = providerData?.[type]?.service_providers || [];

  return [
    {
      name: "provider_name",
      type: "select",
      label: "Select Provider",
      options: serviceProviders?.map((provider: any) => ({
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
  ];
};

/**
 * Create default utilities combining static and dynamic configurations.
 */
export const createDefaultUtilities = (
  providerData: ProviderData | any,
  paidOptions: { value: string; label: string }[],
  utilityData: UtilityData[]
): Utility[] => {
  const staticUtilities = [
    {
      type: "internet",
      label: "Internet",
    },
    {
      type: "electricity_water",
      label: "Electricity/Water",
    },
    {
      type: "gas",
      label: "Gas",
    },
    {
      type: "chiller",
      label: "Chiller",
    },
  ].map((item, index) => ({
    id: Date.now() + index + 1,
    name: item.label,
    fields: generateUtilityFields(item.type, providerData, paidOptions),
  }));

  const dynamicUtilities = utilityData
    ?.filter((utility: UtilityData) => utility?.name?.includes("Utility"))
    ?.map((data: UtilityData) => ({
      id: data._id,
      name: data.name,
      fields: generateUtilityFields(data.type, providerData, paidOptions),
    }));

  return [...staticUtilities, ...dynamicUtilities];
};
