import { apiDashboard } from "@/lib/axios";

interface RegisterEmplooyeArgs {
  name: string;
  username: string;
  email: string;
  password: string;
  roles: string;
}

export async function registerEmplooye({
  name,
  username,
  email,
  password,
  roles,
}: RegisterEmplooyeArgs) {
  const response = await apiDashboard.post("/employees/register", {
    name,
    username,
    email,
    password,
    roles,
  });

  return response.data;
}
