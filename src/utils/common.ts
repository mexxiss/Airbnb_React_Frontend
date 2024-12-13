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
    start: dateFormater(doc.checkin_date),
    end: moment(doc.checkout_date).add(1, "days").format("YYYY-MM-DD"), // Format checkout_date
    color: "#bb9e6c", // Occupied color
    display: "background",
  }));
};

/**
 * Formats the given amount with the specified currency code and symbol.
 * @param amount - The numeric amount to be formatted.
 * @param currency - The currency type ("AED", "USD", or "INR").
 * @returns The formatted amount as a string.
 */
export function formatAmountWithCurrency(
  amount: number,
  currency: "AED" | "USD" | "INR"
): string {
  let formattedAmount: string;

  switch (currency) {
    case "AED":
      formattedAmount = `AED ${amount.toLocaleString()} د.إ`;
      break;
    case "USD":
      formattedAmount = `USD ${amount.toLocaleString()} $`;
      break;
    case "INR":
      formattedAmount = `INR ${amount.toLocaleString()} ₹`;
      break;
    default:
      throw new Error("Unsupported currency type");
  }

  return formattedAmount;
}

/**
 * Calculates the amount per night based on the total charges and total nights.
 * @param totalNetCharges - The total net charges.
 * @param totalNightsCount - The total number of nights.
 * @param currency - The currency type ("AED", "USD", or "INR").
 * @returns The amount per night formatted with currency.
 */
export function calculateAmountPerNight(
  totalNetCharges: number,
  totalNightsCount: number,
  currency: "AED" | "USD" | "INR"
): string {
  if (totalNightsCount <= 0) {
    throw new Error("Total nights count must be greater than zero.");
  }

  const amountPerNight = totalNetCharges / totalNightsCount;

  return formatAmountWithCurrency(amountPerNight, currency);
}
/**
 * Calculates the percentage of nights count out of total days.
 * @param nightsCount - The number of nights stayed.
 * @param totalDays - The total number of days.
 * @returns The calculated percentage as a string with a '%' sign.
 */
export function calculateNightsPercentage(
  nightsCount: number,
  totalDays: number
): string {
  if (totalDays <= 0) {
    throw new Error("Total days must be greater than zero.");
  }

  const percentage = (nightsCount / totalDays) * 100;
  return `${percentage.toFixed(2)}%`;
}

export function htmlDecode(content: string): string {
  const e = document.createElement("div");
  e.innerHTML = content;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue || "";
}

type FormatType =
  | "DD-MM-YYYY"
  | "MM/DD/YYYY"
  | "YYYY/MM/DD"
  | "YYYY-MM-DD HH:mm:ss"; // Add formats as needed

export const formatDate = (
  date: string,
  format: FormatType = "DD-MM-YYYY"
): string => {
  // Ensure date is parsed by moment
  const parsedDate = moment(new Date(date));

  // Check if the date is valid
  if (!parsedDate.isValid()) {
    throw new Error("Invalid date format");
  }

  return parsedDate.format(format);
};

// export const handleDownload = (url: string) => {
//   const link = document.createElement("a");
//   link.href = url;
//   const fileName = decodeURIComponent(url.split("/").pop() || "document.pdf");
//   link.download = fileName;
//   link.target = "_blank";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

export const handleDownload = (url: string) => {
  // Fetch the file as a blob to force download
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;

      // Extract the file name or use a default
      const fileName = decodeURIComponent(
        url.split("/").pop() || "document.pdf"
      );
      link.download = fileName;

      // Append the link, simulate click, and remove it
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Revoke the blob URL
      window.URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => {
      console.error("Download failed:", error);
    });
};

export const paidOptions = [
  { value: "Company", label: "Company" },
  { value: "Owner", label: "Owner" },
];
export const createUtilityFields = (type: string, providerData: any) => [
  {
    name: "provider_name",
    type: "select",
    label: "Select Provider",
    options: providerData?.[type]?.service_providers?.map((provider: any) => ({
      label: provider.name,
      value: provider.name,
    })),
  },
  { name: "account_no", type: "text", label: "Account Number" },
  { name: "paid_by", type: "select", label: "Paid By", options: paidOptions },
  { name: "web_login", type: "text", label: "Web Login" },
  { name: "web_pass", type: "password", label: "Web Password" },
];
