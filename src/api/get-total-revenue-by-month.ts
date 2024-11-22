import { apiDashboard } from "@/lib/axios";

export async function getTotalRevenueByMonth(){
  const response = await apiDashboard.get("orders/metrics-revenue-by-month");
  return response.data;
}