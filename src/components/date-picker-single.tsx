"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFilterContext } from "@/hooks/use-filter-context";

export function DatePickerSingle() {
  const { setStartDate, startDate } = useFilterContext();

  return (
    <Popover >
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal text-foreground-light dark:text-foreground-dark",
            !startDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {startDate ? (
            format(new Date(startDate), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR,
            })
          ) : (
            <span>Escolha uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark" align="start">
        <Calendar
          mode="single"
          selected={startDate ? new Date(startDate) : undefined}
          onSelect={(date) => {
            if (date) setStartDate(date.toISOString());
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
