import { apiDashboard } from "@/lib/axios";

interface GetRevenueByPeriodProps {
  startDate : string,
  endDate : string;
}
export async function getRevenueByPeriod({startDate, endDate} : GetRevenueByPeriodProps){
  const queryParams = `?startDate=${startDate}&endDate=${endDate}`
  const response = await apiDashboard.get("/orders/total-revenue-by-period" + queryParams);
  return response.data;
}