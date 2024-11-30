import { useQuery } from "@tanstack/react-query";
import { BookedDatesResponse } from "../../../types/bookedDates";
import { fetchBookedDates } from "../../../services/apiServices";

interface UseFetchBookedDatesParams {
  start_date: string;
  property: string;
}

export const useFetchBookedDates = ({
  start_date,
  property,
}: UseFetchBookedDatesParams) => {
  return useQuery<BookedDatesResponse>({
    queryKey: ["booked-dates", { start_date, property }],
    queryFn: () => fetchBookedDates({ start_date, property }),
    enabled: !!start_date && !!property,
    refetchOnWindowFocus: false,
  });
};
