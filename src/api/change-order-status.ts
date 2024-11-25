import { apiDashboard } from "@/lib/axios";


interface ChangeOrderStatusArgs {
  orderId : string | number;
  nextIdOrderStatus : string | number;
}
export async function changeOrderStatus({ orderId, nextIdOrderStatus} : ChangeOrderStatusArgs){
  const response = await apiDashboard.patch(`orders/status/${orderId}`, {nextIdOrderStatus});
  return;
}