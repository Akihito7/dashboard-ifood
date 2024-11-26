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
import { DatePickerSingle } from "@/components/date-picker-single";

export function FiltersOrders() {
  const {
    usernameClient,
    setUsernameClient,
    idOrder,
    setIdOrder,
    statusOrderId,
    setStatusOrderId,
  } = useFilterContext();

  function handleRemoveAllFilter() {
    setUsernameClient("");
    setIdOrder("");
    setStatusOrderId("");
  }
  return (
    <div className="flex items-center w-full gap-2">
      <p className="text-foreground-light text-md dark:text-foreground-dark">
        Filtros :
      </p>

      <DatePickerSingle />

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

      <Select
        value={String(statusOrderId) ?? ""}
        onValueChange={(e) => setStatusOrderId(e)}
      >
        <SelectTrigger className="w-[180px]  dark:border-gray-800 border  text-foreground-light text-md dark:text-foreground-dark text-sm">
          <SelectValue
            placeholder="Selecione um status"
            className="text-foreground-light text-md dark:text-foreground-dark"
          />
        </SelectTrigger>
        <SelectContent className=" dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark bg-background-light dark:bg-background-dark">
          <SelectGroup>
            <SelectLabel className="text-foreground-light text-md dark:text-foreground-dark">
              Status
            </SelectLabel>
            <SelectItem value="1">Pendente</SelectItem>
            <SelectItem value="2">Em Preparo</SelectItem>
            <SelectItem value="3">Enviado</SelectItem>
            <SelectItem value="4">Entregue</SelectItem>
            <SelectItem value="5">Cancelado</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
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
