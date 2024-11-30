import { GetCountries } from "react-country-state-city";
import moment from "moment";
import { BookedDateDocument } from "../types/bookedDates";

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
    return array;
  } catch (error) {
    console.log({ error });
  }
};

export const makeMonthStr = (date: Date) => {
  if (!date) {
    return "";
  }
  return date.toLocaleString("default", { month: "long" });
};

export function isRoomsCountNumber(count: number | string): boolean {
  return typeof count === "number";
}

/** date formater yyyy-mm-dd */
/**
 * Formats a date string into "YYYY-MM-DD".
 * @param inputDate - The input date as a string.
 * @returns The formatted date as a string in "YYYY-MM-DD".
 */
export const dateFormater = (inputDate: string): string => {
  return moment(inputDate).format("YYYY-MM-DD");
};

export interface ModifiedDate {
  id: string;
  start: string;
  end: string;
  color: string;
  display: string;
}

export const modifyDates = (
  documents: BookedDateDocument[]
): ModifiedDate[] => {
  return documents.map((doc, index) => ({
    id: doc._id,
    start: dateFormater(doc.checkin_date), // Format checkin_date
    end: dateFormater(doc.checkout_date), // Format checkout_date
    color: "#bb9e6c", // Occupied color
    display: "background",
  }));
};
