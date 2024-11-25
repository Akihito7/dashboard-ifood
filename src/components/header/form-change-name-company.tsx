"use client";

import { setCookies } from "@/actions/cookies";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const changeNameCompanySchema = z.object({
  companyName: z.string(),
});

export type ChangeNameCompanyType = z.infer<typeof changeNameCompanySchema>;

interface FormChangeNameCompanyProps {
  onSubmit: (value : ChangeNameCompanyType) => void;
}
export function FormChangeNameCompany({ onSubmit } : FormChangeNameCompanyProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ChangeNameCompanyType>({
    resolver: zodResolver(changeNameCompanySchema),
  });

  return (
    <form className="flex gap-2">
      <Controller
        control={control}
        name="companyName"
        render={({ field: { onChange, value = "" } }) => (
          <Input
            placeholder="Nome da empresa"
            className="text-foreground-light w-full border p-3 rounded-lg  dark:border-gray-800 focus:border-gray-800 focus:outline-none"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Button
        className="border border-dark dark:border-gray-800 text-foreground-light dark:text-foreground-dark"
        onClick={handleSubmit(onSubmit)}
      >
        Alterar
      </Button>
    </form>
  );
}
