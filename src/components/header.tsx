"use client";
import {
  IoFastFoodOutline,
  IoMoonOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { handleThemeCookies } from "@/actions/theme-cookies";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  async function handleToggleTheme() {
    await handleThemeCookies();
  }

  const pathname = usePathname();

  return (
    <header className="w-full bg-background-light dark:bg-background-dark flex items-center px-12 py-4">
      <SiFoodpanda
        size={28}
        className="text-black dark:text-foreground-dark mr-12 hover:cursor-pointer"
      />

      <nav className="flex-1 gap-4">
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2 hover:cursor-pointer">
            <Link href="/dashboard" className="flex gap-2">
              <IoHomeOutline
                size={20}
                className={`${
                  pathname === "/dashboard"
                    ? "text-blue-500"
                    : "dark:text-foreground-dark text-foreground-light"
                }`}
              />
              <span
                className={`${
                  pathname === "/dashboard"
                    ? "text-blue-500"
                    : "dark:text-foreground-dark text-foreground-light"
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>

          <li className="flex items-center hover:cursor-pointer">
            <Link href="/orders" className="flex gap-2">
              <IoFastFoodOutline
                size={20}
                className={`${
                  pathname === "/orders"
                    ? "text-blue-500"
                    : "dark:text-foreground-dark text-foreground-light"
                }`}
              />
              <span  className={`${
                  pathname === "/orders"
                    ? "text-blue-500"
                    : "dark:text-foreground-dark text-foreground-light"
                }`}>
                Pedidos
              </span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button
          className="p-2 bg-transparent border border-dark   dark:border-gray-800 flex justify-center items-center rounded-md dark:shadow-lg "
          onClick={handleToggleTheme}
        >
          <IoMoonOutline
            size={24}
            className="text-black dark:text-foreground-dark"
          />
        </button>

        <button className="px-4 py-2 flex bg-transparent border border-dark dark:border-gray-800 justify-center rounded-md gap-2 items-center dark:shadow-lg ">
          <span className="text-black dark:text-foreground-dark text-md">
            Burguer King
          </span>
          <IoIosArrowDown
            size={20}
            className="text-black dark:text-foreground-dark"
          />
        </button>
      </div>
    </header>
  );
}
