'use server'

import { GetCookiesDto } from "@/dtos/get-cookies-dto";
import { SetCookiesDTO } from "@/dtos/set-cookies-dto"
import { cookies } from "next/headers"

export async function setCookies({ key, value, optionsCookies}: SetCookiesDTO) {
    const cookiesStore = await cookies();
    cookiesStore.set(key, value, optionsCookies);
}

export async function getCookies({key} : GetCookiesDto ){
  const cookiesStore = await cookies();
  return cookiesStore.get(key)?.value;
}