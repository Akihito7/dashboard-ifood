'use server'

import { SetCookiesDTO } from "@/dtos/set-cookies-dto"
import { cookies } from "next/headers"

export async function setCookies({ key, value, optionsCookies}: SetCookiesDTO) {
    const cookiesStore = await cookies();
    cookiesStore.set(key, value, optionsCookies);
}