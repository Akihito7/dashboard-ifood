import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraphicPieChart } from "./graphic-pie-chart";

export function GraphicBestSellers() {
    return (
        <Card className="h-[460px] py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800 justify-between">
            <CardHeader>
                <CardTitle className="mb-2 text-md dark:text-foreground-dark">
                    Produtos mais vendidos
                </CardTitle>
                <CardDescription className="mb-2 text-md dark:text-foreground-dark">Produtos mais vendidos em todo período</CardDescription>
            </CardHeader>
            <CardContent>
                <GraphicPieChart />
            </CardContent>
        </Card>
    )
}