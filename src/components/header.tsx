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
import { LogOut, PlusIcon, PencilIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { logout } from "@/actions/logout";

export function Header() {
  async function handleToggleTheme() {
    await handleThemeCookies();
  }

  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

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
              <span
                className={`${
                  pathname === "/orders"
                    ? "text-blue-500"
                    : "dark:text-foreground-dark text-foreground-light"
                }`}
              >
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

        <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2 flex bg-transparent border border-dark dark:border-gray-800 justify-center rounded-md gap-2 items-center dark:shadow-lg text-black dark:text-foreground-dark text-md">
            Burguer King
            <IoIosArrowDown
              size={20}
              className="text-foreground-light dark:text-foreground-dark"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-dark rounded-md p-4 mt-2 border-dark dark:border-gray-800 justify-center bg-background-light dark:bg-background-dark gap-2 flex flex-col">
            <DropdownMenuItem className="text-foreground-light dark:text-foreground-dark flex gap-2 items-center  cursor-pointer">
              Mudar Nome
              <PencilIcon
                size={18}
                className="text-foreground-light dark:text-foreground-dark"
              />
            </DropdownMenuItem>
            <DropdownMenuItem className="text-foreground-light dark:text-foreground-dark flex gap-2 items-center  cursor-pointer">
              Adicionar funcionario
              <PlusIcon
                size={18}
                className="text-foreground-light dark:text-foreground-dark"
              />
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="text-foreground-light dark:text-foreground-dark flex gap-2 items-center cursor-pointer"
            >
              Logout
              <LogOut
                size={18}
                className="text-foreground-light dark:text-foreground-dark"
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
