import { FormLogin } from "./form-login";

export default function Login() {
    return (
        <div className="w-full h-screen bg-background-light dark:bg-background-dark">
            <div className="h-screen w-1/2 bg-background-dark dark:bg-background-light flex gap-2 flex-col items-center justify-center ml-auto">
                <FormLogin />
            </div>
        </div>
    )
}
