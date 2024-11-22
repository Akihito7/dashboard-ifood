import { apiDashboard } from "@/lib/axios";

export async function getTotalCountOrdersCancelledByMonth(date : string){
  console.log(date)
  const response = await apiDashboard.get(`/orders/total-cancelled-by-month?date=${date}`);
  return response.data;
}