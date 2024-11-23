import { apiDashboard } from "@/lib/axios";

export async function getOrdersByDay(date : string){
  const response = await apiDashboard.get(`/orders/by-day?date=${date}`);
  return response.data;
}