import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterContextProvider");
  }
  return context;
};
