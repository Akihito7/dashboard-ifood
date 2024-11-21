import { LoginDTO } from "@/dtos/login-dto";
import { apiDashboard } from "@/lib/axios";

export async function login({ email, password }: LoginDTO) {
    const response = await apiDashboard.post("/auth/login", { email, password });
    const { token } = response.data
    return token
}