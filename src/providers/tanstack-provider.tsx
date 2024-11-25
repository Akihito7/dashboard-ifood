"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const client = new QueryClient();
export function TanstackProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
