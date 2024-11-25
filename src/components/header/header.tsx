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
import { LogOut, PlusIcon, PencilIcon, XIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { logout } from "@/actions/logout";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

import { getCookies, setCookies } from "@/actions/cookies";
import { DialogHeader } from "../ui/dialog";
import { FormLoginRegisterEmplooye, FormRegisterEmplooye } from "./form-register-emplooye";
import { ChangeNameCompanyType, FormChangeNameCompany } from "./form-change-name-company";
import { registerEmplooye } from "@/api/register-emplooye";

interface StatusDialogProps {
  type: "changeName" | "addEmplooye";
  open: boolean;
}
export function Header() {
  const KEY_NAME_COMPANY = "@dashboard:companyName";
  const [statusDialog, setStatusDialog] = useState<StatusDialogProps[]>([
    {
      type: "changeName",
      open: false,
    },
    {
      type: "addEmplooye",
      open: false,
    },
  ]);
  const [nameCompany, setNameCompany] = useState<string>("Nova empresa");

  const router = useRouter();
  const pathname = usePathname();

  async function handleToggleTheme() {
    await handleThemeCookies();
  }

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  async function handleSetNameCompany({ companyName}: ChangeNameCompanyType) {
    await setCookies({
      key: KEY_NAME_COMPANY,
      value: companyName,
      optionsCookies: {
        secure: true,
        httpOnly: true,
      },
    });

    handleCloseModal("changeName")
  }

  async function getNameCompany() {
    const companyName =
      (await getCookies({ key: KEY_NAME_COMPANY })) || "Nova Empresa";
    setNameCompany(companyName);
  }

  async function handleCloseModal(type : "changeName" | "addEmplooye"){
    if(type === "changeName"){
      setStatusDialog(prev => {
        return [
          {
            type : "changeName",
            open : false
          },
          prev[1]
        ]
      })
    } 
    else {
      setStatusDialog(prev => {
        return [
          prev[0],
          {
            type : "addEmplooye",
            open : false
          },
        ]
      })
    }
  }

  async function handleRegisterEmplooye({
    name,
    username,
    email,
    password,
    roles,
  }: FormLoginRegisterEmplooye) {
    await registerEmplooye({
      name,
      username,
      email,
      password,
      roles,
    });

    handleCloseModal("addEmplooye");
  }

  useEffect(() => {
    getNameCompany();
  }, [handleSetNameCompany]);

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
            {nameCompany}
            <IoIosArrowDown
              size={20}
              className="text-foreground-light dark:text-foreground-dark"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-dark rounded-md p-4 mt-2 border-dark dark:border-gray-800 justify-center bg-background-light dark:bg-background-dark gap-2 flex flex-col">
            <button
              onClick={() => {
                setStatusDialog((prev) => {
                  return [
                    {
                      type: "changeName",
                      open: true,
                    },
                    prev[1],
                  ];
                });
              }}
            >
              <DropdownMenuItem className="text-foreground-light dark:text-foreground-dark flex gap-2 items-center  cursor-pointer">
                Mudar Nome
                <PencilIcon
                  size={18}
                  className="text-foreground-light dark:text-foreground-dark"
                />
              </DropdownMenuItem>
            </button>
            <button
              onClick={() => {
                setStatusDialog((prev) => {
                  return [
                    prev[0],
                    {
                      type: "addEmplooye",
                      open: true,
                    },
                  ];
                });
              }}
            >
              <DropdownMenuItem className="text-foreground-light dark:text-foreground-dark flex gap-2 items-center  cursor-pointer">
                Adicionar Funcionário
                <PlusIcon
                  size={18}
                  className="text-foreground-light dark:text-foreground-dark"
                />
              </DropdownMenuItem>
            </button>

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

      <Dialog open={statusDialog[0].open}>
        {statusDialog[0].open && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <DialogContent className=" bg-background-light relative w-full max-w-md p-6 dark:bg-background-dark rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg text-bold text-foreground-light dark:text-foreground-dark mb-4 flex justify-between items-start">
                    Qual nome da sua empresa?
                    <XIcon
                      size={28}
                      className="cursor-pointer"
                      onClick={() => {
                        setStatusDialog((prev) => {
                          return [
                            {
                              type: "changeName",
                              open: false,
                            },
                            prev[1],
                          ];
                        });
                      }}
                    />
                  </DialogTitle>

                  <FormChangeNameCompany  onSubmit={handleSetNameCompany}/>
                </DialogHeader>
              </DialogContent>
            </div>
          </>
        )}
      </Dialog>

      <Dialog open={statusDialog[1].open}>
        {statusDialog[1].open && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <DialogContent className=" bg-background-light relative w-full max-w-md p-6 dark:bg-background-dark rounded-lg shadow-lg">
                <DialogHeader>
                  <DialogTitle className="text-lg text-bold text-foreground-light dark:text-foreground-dark mb-4 flex justify-between items-start">
                    Dados do seu funcionário!
                    <XIcon
                      size={28}
                      className="cursor-pointer"
                      onClick={() => {
                        setStatusDialog((prev) => {
                          return [
                            prev[0],
                            {
                              type: "addEmplooye",
                              open: false,
                            },
                          ];
                        });
                      }}
                    />
                  </DialogTitle>

                  <FormRegisterEmplooye onSubmit={handleRegisterEmplooye}/>
                </DialogHeader>
              </DialogContent>
            </div>
          </>
        )}
      </Dialog>
    </header>
  );
}
