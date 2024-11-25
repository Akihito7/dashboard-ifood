"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { setCookies } from "@/actions/cookies";
import { login } from "@/api/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginDTO } from "@/dtos/login-dto";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export function FormLogin() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin({ email, password }: LoginDTO) {
    try {
      const KEY_TOKEN = "@dashboard:token";
      const token = await login({ email, password });
      setCookies({
        key: KEY_TOKEN,
        value: token,
        optionsCookies: {
          secure: true,
          httpOnly: true,
        },
      });
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <form className="flex flex-col gap-4 w-96 bg-white p-8 rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-800">Bem-vindo!</h1>
      <p className="text-lg font-bold text-gray-600">
        Realize seu login abaixo
      </p>

      <div className="flex flex-col gap-2">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value = "" } }) => (
            <>
              <Input
                type="email"
                placeholder="Digite seu email"
                className={`text-foreground-light w-full border p-3 rounded-lg focus:outline-none ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                onChange={onChange}
                value={value}
              />
              {errors.email && (
                <p className="text-sm text-red-400">{errors.email.message}</p>
              )}
            </>
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value = "" } }) => (
            <>
              <Input
                type="password"
                placeholder="Digite sua senha"
                className={`text-foreground-light w-full border p-3 rounded-lg focus:outline-none ${
                  errors.password
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                onChange={onChange}
                value={value}
              />
              {errors.password && (
                <p className="text-sm text-red-400">{errors.password.message}</p>
              )}
            </>
          )}
        />
      </div>

      <Button
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all"
        onClick={handleSubmit(handleLogin)}
      >
        Entrar
      </Button>
    </form>
  );
}
