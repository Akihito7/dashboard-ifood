"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { GraphicRevenueByPeriod } from "./graphic-revenue-by-period";
import { GraphicBestSellers } from "./graphic-best-sellers";
import { getTotalCountOrdersByDay } from "@/api/get-total-count-orders-by-day";
import { useQuery } from "@tanstack/react-query";
import {getTotalCountOrdersByMonth } from "@/api/get-total-count-orders-by-month";
import { getTotalRevenueByMonth } from "@/api/get-total-revenue-by-month";
import { GetTotalRevenueByMonth } from "@/api/types/get-total-revenue-by-month";
import { getTotalCountOrdersCancelledByMonth } from "@/api/get-total-count-orders-cancelled-by-month";
import { GetTotalCountOrdersByDay } from "@/api/types/get-total-count-orders-by-day";
import { GetTotalCountOrdersByMonth } from "@/api/types/get-total-count-orders-by-month";
import { GetTotalCountOrdersCancelledByMonth } from "@/api/types/get-total-count-orders-canceled-by-month";

export function ContentDashboard() {
  const currentDateIso = new Date().toISOString();
  const {
    data: totalCountOrdersByDay,
    error: errorTotalCountByDay,
    isLoading: isLoadingTotalCountOrdersByDay,
  } = useQuery<GetTotalCountOrdersByDay>({
    queryKey: ["totalOrdersCountByDay"],
    queryFn: async () => getTotalCountOrdersByDay(currentDateIso),
  });

  const {
    data: totalCountOrdersByMonth,
    error: errorTotalCountOrdersByMonth,
    isLoading: isLoadingTotalCountOrdersByMonth,
  } = useQuery<GetTotalCountOrdersByMonth>({
    queryKey: ["ordersCountByMonth"],
    queryFn: async () => getTotalCountOrdersByMonth(currentDateIso),
  });

  const {
    data: totalRevenueByMonth,
    error: errorTotalRevenueByMonth,
    isLoading: isLoadingTotalRevenueByMonth,
  } = useQuery<GetTotalRevenueByMonth>({
    queryKey: ["totalRevenueByMonth"],
    queryFn: getTotalRevenueByMonth,
  });

  const {
    data: totalCountOrdersCancelledByMonth,
    error: errorTotalCountOrdersCancelledByMonth,
    isLoading: isLoadingTotalCountOrdersCancelledByMonth,
  } = useQuery<GetTotalCountOrdersCancelledByMonth>({
    queryKey: ["ordersCountCancelled"],
    queryFn: async () => getTotalCountOrdersCancelledByMonth(currentDateIso),
  });

  return (
    <div className="w-full min-h-screen bg-white dark:bg-background-dark flex justify-center py-4">
      <div className="flex flex-col max-w-[1400px] px-12">
        <h1 className="text-foreground-light dark:text-white text-xl mb-4 font-bold">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Receita total (mês)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                {isLoadingTotalRevenueByMonth
                  ? ""
                  : Number(
                      totalRevenueByMonth!.currentMonthTotalRevenue
                    ).toLocaleString("pt-br", {
                      currency: "BRL",
                      style: "currency",
                    })}
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">
                  {totalRevenueByMonth?.percentageChange}% {""}
                </span>
                Em relação ao mês passado
              </p>
            </CardFooter>
          </Card>

          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Pedidos (mês)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                {totalCountOrdersByMonth?.totalOrders}
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">
                  {totalCountOrdersByMonth?.percentageChange}%{" "}
                </span>
                Em relação ao mês passado
              </p>
            </CardFooter>
          </Card>

          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Pedidos (dia)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                {totalCountOrdersByDay?.totalOrders}
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">
                  {totalCountOrdersByDay?.percentageChange}%{" "}
                </span>
                Em relação ao dia anterior
              </p>
            </CardFooter>
          </Card>

          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Cancelamentos (mês)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                {totalCountOrdersCancelledByMonth?.totalOrdersCancelled}
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">{totalCountOrdersCancelledByMonth?.percentageChange}% </span>Em relação ao mês
                passado
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <GraphicRevenueByPeriod />
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <GraphicBestSellers />
          </div>
        </div>
      </div>
    </div>
  );
}
