import { GetCountries } from "react-country-state-city";

export const getDialingCodeByCountry = async (
  countryCode: string
): Promise<string | undefined> => {
  try {
    const countryDetails = await GetCountries();

    const finalCode = countryDetails?.find((phone) => {
      if (phone.iso2 === countryCode) {
        return phone.phone_code;
      }
    });

    return finalCode?.phone_code;
  } catch (error) {
    console.error("Error fetching country details:", error);
    return "";
  }
};

export const getCounteriesArr = async () => {
  try {
    const array = await GetCountries();
    console.log({ array });

    return array;
  } catch (error) {
    console.log({ error });
  }
};
