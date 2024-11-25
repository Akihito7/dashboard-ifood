"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const formRegisterEmplooyeSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  username: z.string().min(1, "Username é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
  roles: z.string().min(1, "Função é obrigatória"),
});

export type FormLoginRegisterEmplooye = z.infer<
  typeof formRegisterEmplooyeSchema
>;

interface FormRegisterEmplooyeProps {
  onSubmit: (data: FormLoginRegisterEmplooye) => void;
}

export function FormRegisterEmplooye({ onSubmit }: FormRegisterEmplooyeProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormLoginRegisterEmplooye>({
    resolver: zodResolver(formRegisterEmplooyeSchema),
  });

  return (
    <form className="flex flex-col gap-2">
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value = "" } }) => (
          <>
            <Input
              className="text-foreground-light dark:text-foreground-dark w-full border p-3 rounded-lg dark:border-gray-800 focus:border-gray-800 focus:outline-none"
              placeholder="Name"
              type="text"
              onChange={onChange}
              value={value}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value = "" } }) => (
          <>
            <Input
              className="text-foreground-light dark:text-foreground-dark w-full border p-3 rounded-lg dark:border-gray-800 focus:border-gray-800 focus:outline-none"
              placeholder="Username"
              type="text"
              onChange={onChange}
              value={value}
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value = "" } }) => (
          <>
            <Input
              className="text-foreground-light dark:text-foreground-dark w-full border p-3 rounded-lg dark:border-gray-800 focus:border-gray-800 focus:outline-none"
              placeholder="Email"
              type="email"
              onChange={onChange}
              value={value}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value = "" } }) => (
          <>
            <Input
              className="text-foreground-light dark:text-foreground-dark w-full border p-3 rounded-lg dark:border-gray-800 focus:border-gray-800 focus:outline-none"
              placeholder="Password"
              type="password"
              onChange={onChange}
              value={value}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="roles"
        render={({ field: { onChange, value = "" } }) => (
          <>
            <Input
              className="text-foreground-light dark:text-foreground-dark w-full border p-3 rounded-lg dark:border-gray-800 focus:border-gray-800 focus:outline-none"
              placeholder="Roles"
              onChange={onChange}
              value={value}
            />
            {errors.roles && (
              <p className="text-sm text-red-500">{errors.roles.message}</p>
            )}
          </>
        )}
      />

      <Button
        className="border border-dark dark:border-gray-800 text-foreground-light dark:text-foreground-dark"
        onClick={handleSubmit(onSubmit)}
      >
        Cadastrar
      </Button>
    </form>
  );
}
