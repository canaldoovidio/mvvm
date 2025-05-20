import { useState } from "react";
import { Investment, mockInvestments } from "../models/Investment";

export function useInvestmentViewModel() {
  const [investments, setInvestments] = useState<Investment[]>(mockInvestments);

  function filterByRisk(risk: string) {
    if (risk === "Todos") {
      setInvestments(mockInvestments);
    } else {
      setInvestments(mockInvestments.filter(inv => inv.risco === risk));
    }
  }

  return {
    investments,
    filterByRisk,
  };
}