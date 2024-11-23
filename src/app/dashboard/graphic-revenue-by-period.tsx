import { DatePickerRange } from "@/components/date-picker-range";
import { GraphicLineChart } from "./graphic-line-chart";
import { Card } from "@/components/ui/card";
import { GetRevenueByPeriod } from "@/api/types/get-revenue-by-period";
import { SkeletonLoader } from "@/components/skeleton-loader";

interface GraphicRevenueByPeriodProps {
  items: GetRevenueByPeriod[] | undefined;
}
export function GraphicRevenueByPeriod({ items }: GraphicRevenueByPeriodProps) {
  return (
    <Card className="h-[460px] py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800 justify-between">
      <div className="flex items-center">
        {items ? (
          <p className="flex-1 text-md font-bold dark:text-foreground-dark text-foreground-light">
            Receita por período
          </p>
        ) : (
          <SkeletonLoader className="flex-1 h-8 mr-4" />
        )}

        <p className="text-md mr-2  dark:text-foreground-dark text-foreground-light">
          Período :
        </p>
        <DatePickerRange />
      </div>

      {items ? (
        <GraphicLineChart items={items} />
      ) : (
        <SkeletonLoader className="h-[360px] w-full" />
      )}
    </Card>
  );
}
