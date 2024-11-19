import type { Metadata } from "next";
import "./globals.css";
import { getThemeCookies } from "@/actions/theme-cookies";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeCookies();
  return (
    <html lang="pt-br">
      <body className={theme}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
