'use server'

import { cookies } from "next/headers";

const THEME_KEY = "@dashboard:theme";

export async function handleThemeCookies() {
  const cookiesStore = await cookies();
  const theme = cookiesStore.get(THEME_KEY)?.value ?? "dark";
  cookiesStore.set(THEME_KEY, theme === "light" ? "dark" : "light", {
    httpOnly : true,
    secure : true
  })
}

export async function getThemeCookies(){
  const cookiesStore = await cookies();
  const theme = cookiesStore.get(THEME_KEY)?.value ?? "dark";
  return theme;
}
