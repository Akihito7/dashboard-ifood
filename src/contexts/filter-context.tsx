'use client'

import { addDays } from "date-fns";
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";


interface FilterContextValue {
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
}

export const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export function FilterContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  return (
    <FilterContext.Provider value={{ date, setDate }}>
      {children}
    </FilterContext.Provider>
  );
}
