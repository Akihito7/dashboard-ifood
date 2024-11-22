import { apiDashboard } from "@/lib/axios";

export async function getBestSellersProducts (){
  const response = await apiDashboard.get("/items/best-sellers")
  return response.data;
}