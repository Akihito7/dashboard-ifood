import { apiDashboard } from "@/lib/axios";

export async function getUserDetails(){
  const response = await apiDashboard.get("/employees/details");
  return response.data;
}