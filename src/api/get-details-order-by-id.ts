import { apiDashboard } from "@/lib/axios";

export async function getDetailsOrderById(orderId: number | undefined) {
  const response = await apiDashboard.get(`orders/details/${orderId}`);
  console.log(" resposne", response.data);
  return response.data;
}
