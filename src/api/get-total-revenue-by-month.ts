import { apiDashboard } from "@/lib/axios";

export async function getTotalRevenueByMonth(date : string){
  const response = await apiDashboard.get(`orders/metrics-revenue-by-month?date=${date}`);
  return response.data;
}