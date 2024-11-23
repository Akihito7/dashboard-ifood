import { CartesianGrid, LabelList, Line, LineChart, XAxis, ResponsiveContainer } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";


interface GraphicLineChartProps {
  items: {
    order_date: string; 
    _count: {
      _all: number; 
    };
    _sum: { total_price: string }; 
  }[] | undefined;
}
function formatData(items: GraphicLineChartProps['items']) {
  if (!items) return [];

  return items.map(item => ({
    date: new Date(item.order_date).toLocaleDateString('default', { day: '2-digit', month: '2-digit' }),
    count: item._count._all,
  }));
}

export function GraphicLineChart({ items }: GraphicLineChartProps) {

  const chartData = formatData(items);
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="h-[360px]">
      <ResponsiveContainer>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date" 
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Line
            dataKey="count" 
            type="natural"
            stroke="#7a72ee"
            strokeWidth={2}
            dot={{
              fill: "var(--color-desktop)",
            }}
            activeDot={{
              r: 6,
            }}
          >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
