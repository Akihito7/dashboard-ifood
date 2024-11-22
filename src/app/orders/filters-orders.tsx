"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch, AiFillDelete } from "react-icons/ai";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterContext } from "@/hooks/use-filter-context";

export function FiltersOrders() {
  const {
    usernameClient,
    setUsernameClient,
    idOrder,
    setIdOrder,
    statusOrder,
    setStatusOrder,
  } = useFilterContext();

  function handleRemoveAllFilter() {
    setUsernameClient("");
    setIdOrder("");
    setStatusOrder("");
  }
  return (
    <div className="flex items-center w-full gap-2">
      <p className="text-foreground-light text-md dark:text-foreground-dark">
        Filtros :
      </p>

      <Input
        className="w-48  dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark"
        placeholder="Id do Pedido"
        value={idOrder}
        onChange={(e) => {
          setIdOrder(e.target.value);
        }}
      />

      <Input
        className="w-72  dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark"
        placeholder="Nome do Cliente"
        value={usernameClient}
        onChange={(e) => {
          setUsernameClient(e.target.value);
        }}
      />

      <Select value={statusOrder}>
        <SelectTrigger className="w-[180px]  dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark text-sm">
          <SelectValue
            placeholder="Selecione um status"
            className="text-foreground-light text-md dark:text-foreground-dark"
          />
        </SelectTrigger>
        <SelectContent className=" dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark">
          <SelectGroup>
            <SelectLabel className="text-foreground-light text-md dark:text-foreground-dark">
              Status
            </SelectLabel>
            <SelectItem value="Em preparo">Em Preparo</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button className=" dark:bg-gray-800 text-foreground-light text-md dark:text-foreground-dark text-sm">
        <AiOutlineSearch
          size={22}
          className="text-foreground-light text-md dark:text-foreground-dark"
        />
        Filtrar resultados
      </Button>

      <Button
        className=" dark:border-gray-800 dark:border text-foreground-light text-md dark:text-foreground-dark text-sm"
        onClick={handleRemoveAllFilter}
      >
        <AiFillDelete
          size={22}
          className="text-foreground-light text-md dark:text-foreground-dark"
        />
        Remover filtros
      </Button>
    </div>
  );
}
