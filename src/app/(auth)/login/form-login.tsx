'use client'

import { login } from "@/api/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginDTO } from "@/dtos/login-dto";
import { AppError } from "@/utils/app-error";
import { useState } from "react";

export function FormLogin() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    async function handleLogin({ email, password }: LoginDTO) {
        try {
            await login({ email, password })
        } catch (error : any) {
            alert(error.message)
        }
    }

    return (
        <form className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-foreground-dark dark:text-background-dark">Login</h1>
            <Input type="email" placeholder="Email" className="w-72  text-foreground-dark dark:text-foreground-light"
                onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" className="w-72 text-foreground-dark dark:text-foreground-light"
                onChange={(e) => setPassword(e.target.value)} />
            <Button className="w-72 bg-blue-600 text-foreground-dark dark:text-foreground-light"
                onClick={(e) => {
                    e.preventDefault();
                    if (email && password) handleLogin({ email, password })
                }}
            >
                Logar
            </Button>
        </form>
    )
}