"use server";

import { cookies } from "next/headers";

export async function logout() {
  const KEY_TOKEN = "@dashboard:token";
  const cookiesStore = await cookies();
  cookiesStore.delete(KEY_TOKEN);
}
