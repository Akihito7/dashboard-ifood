import { apiDashboard } from "@/lib/axios";

export async function getTotalCountOrdersByMonth(date : string) {
  const response = await apiDashboard.get(`orders/total-by-month?date=${date}`);
  return response.data;
}
