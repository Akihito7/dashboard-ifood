import { DatePickerRange } from "@/components/date-picker-range";
import { Chart } from "chart.js"
import { GraphicLineChart } from "./graphic-line-chart";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useFilterContext } from "@/hooks/use-filter-context";
import { getRevenueByPeriod } from "@/api/get-revenue-by-period";
import { useEffect } from "react";
import { GetRevenueByPeriod } from "@/api/types/get-revenue-by-period";

export function GraphicRevenueByPeriod() {
  const { date } = useFilterContext();

  const {data, error} = useQuery<GetRevenueByPeriod[]>({
    queryKey : ['revenue-by-period',date],
    queryFn : async () => getRevenueByPeriod({
      startDate : date!.from!.toISOString(),
      endDate : date!.to!.toISOString(),
    })
  })

    return (
        <Card className="h-[460px] py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
                <p className="flex-1 text-md font-bold dark:text-foreground-dark text-foreground-light">Receita por período</p>
                <p className="text-md mr-2  dark:text-foreground-dark text-foreground-light">Período :</p>
                <DatePickerRange />
            </div>
            <GraphicLineChart items={data}/>
        </Card>
    )
}