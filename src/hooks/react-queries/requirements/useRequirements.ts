// hooks/useRequirements.ts
import { useQuery } from "@tanstack/react-query";
import { Requirement } from "../../../types/requirementTypes";
import { fetchRequirements } from "../../../services/apiServices";

export const useRequirements = () => {
  return useQuery<Requirement[], Error>({
    queryKey: ["requirements"],
    queryFn: fetchRequirements,
  });
};
