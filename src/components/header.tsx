"use client";
import {
  IoFastFoodOutline,
  IoMoonOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { handleThemeCookies } from "@/actions/theme-cookies";

export function Header() {

  async function handleToggleTheme() {
    await handleThemeCookies()
  }

  return (
    <header className="w-full bg-background-light dark:bg-background-dark flex items-center px-4 py-4">
      <SiFoodpanda
        size={28}
        className="text-black dark:text-foreground-dark mr-12 hover:cursor-pointer"
      />

      <nav className="flex-1 gap-4">
        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-2 hover:cursor-pointer">
            <IoHomeOutline
              size={20}
              className="text-black dark:text-foreground-dark"
            />
            <span className="text-black dark:text-foreground-dark text-md">
              Dashboard
            </span>
          </li>

          <li className="flex items-center gap-2 hover:cursor-pointer">
            <IoFastFoodOutline
              size={20}
              className="text-black dark:text-foreground-dark"
            />
            <span className="text-black dark:text-foreground-dark text-md">
              Pedidos
            </span>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button
          className="p-2 bg-transparent border-2 border-dark  dark:border-gray-500 flex justify-center items-center rounded-md"
          onClick={handleToggleTheme}
        >
          <IoMoonOutline
            size={24}
            className="text-black dark:text-foreground-dark"
          />
        </button>

        <button className="px-4 py-2 flex bg-transparent border-2 border-dark dark:border-gray-500 justify-center rounded-md gap-2 items-center">
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