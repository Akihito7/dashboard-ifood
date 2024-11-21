import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FormLogin() {
    return (
        <form className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-foreground-dark dark:text-background-dark">Login</h1>
            <Input type="email" placeholder="Email" className="w-72  text-foreground-dark dark:text-foreground-light" />
            <Input type="password" placeholder="Password" className="w-72 text-foreground-dark dark:text-foreground-light" />
            <Button className="w-72 bg-blue-600 text-foreground-dark dark:text-foreground-light">Logar</Button>
        </form>
    )  
}