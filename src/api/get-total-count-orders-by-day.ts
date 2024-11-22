import { apiDashboard } from "@/lib/axios";

export async function getTotalCountOrdersByDay(date : string) {
  const response = await apiDashboard.get(
    `/orders/total-by-day?date=${date}`
  );
  return response.data;
}
