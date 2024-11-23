"use client";

import { addDays } from "date-fns";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { DateRange } from "react-day-picker";

interface FilterContextValue {
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
  usernameClient: string | undefined;
  setUsernameClient: Dispatch<SetStateAction<string | undefined>>;
  idOrder: string | undefined;
  setIdOrder: Dispatch<SetStateAction<string | undefined>>;
  statusOrder: string | undefined;
  setStatusOrder: Dispatch<SetStateAction<string | undefined>>;
  startDate : string;
  setStartDate : Dispatch<SetStateAction<string>>
}

export const FilterContext = createContext<FilterContextValue | undefined>(
  undefined
);

export function FilterContextProvider({ children }: { children: ReactNode }) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  const [startDate, setStartDate] = useState<string>(new Date().toISOString());

  const [usernameClient, setUsernameClient] = useState<string | undefined>("");
  const [idOrder, setIdOrder] = useState<string | undefined>();
  const [statusOrder, setStatusOrder] = useState<string | undefined>();

  return (
    <FilterContext.Provider
      value={{
        date,
        setDate,
        usernameClient,
        setUsernameClient,
        idOrder,
        setIdOrder,
        statusOrder,
        setStatusOrder,
        startDate,
        setStartDate
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
