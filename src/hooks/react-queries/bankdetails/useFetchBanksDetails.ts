import { useQuery } from "@tanstack/react-query";
import { getPaymentDetails } from "../../../services/apiServices";
import { PaymentDetails } from "../../../types/paymentsTypes";

export const useFetchBanksDetails = () => {
  return useQuery<PaymentDetails>({
    queryKey: ["bankdetails"],
    queryFn: getPaymentDetails,
  });
};
