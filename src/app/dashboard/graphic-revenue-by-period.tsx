import { DatePickerRange } from "@/components/date-picker-range";
import { Chart } from "chart.js"
import { GraphicLineChart } from "./graphic-line-chart";
import { Card } from "@/components/ui/card";

export function GraphicRevenueByPeriod() {
    return (
        <Card className="h-[460px] py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="flex items-center">
                <p className="flex-1 text-md font-bold dark:text-foreground-dark">Receita por período</p>
                <p className="text-md mr-2  dark:text-foreground-dark">Período :</p>
                <DatePickerRange />
            </div>
            <GraphicLineChart />
        </Card>
    )
}