import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraphicPieChart } from "./graphic-pie-chart";
import { GetBestSellersProducts } from "@/api/types/get-best-sellers-products";

interface GraphicBestSellersProps {
  items: GetBestSellersProducts[] | undefined;
}

export function GraphicBestSellers({ items }: GraphicBestSellersProps) {
  const pieChartColors = [
    "#4CAF50",
    "#FF9800",
    "#2196F3",
    "#F44336",
    "#9C27B0",
  ];
  const itemsWithChartColors = items?.map((items, index) => {
    return {
      ...items,
      fill: pieChartColors[index],
    };
  });
  return (
    <Card className="h-[460px] py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800 justify-between">
      <CardHeader>
        <CardTitle className="mb-2 text-md dark:text-foreground-dark text-foreground-light">
          Produtos mais vendidos
        </CardTitle>
        <CardDescription className="mb-2 text-md dark:text-foreground-dark text-foreground-light">
          Produtos mais vendidos em todo período
        </CardDescription>
      </CardHeader>
      <CardContent>
        <GraphicPieChart items={itemsWithChartColors} />
      </CardContent>
    </Card>
  );
}
