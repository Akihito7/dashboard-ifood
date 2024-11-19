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

export function FiltersOrders() {
  return (
    <div className="flex items-center w-full gap-2">
      <p className="text-foreground-light text-md dark:text-foreground-dark">
        Filtros :
      </p>

      <Input
        className="w-48  dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark"
        placeholder="Id do Pedido"
      />

      <Input
        className="w-72  dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark"
        placeholder="Nome do Cliente"
      />

      <Select>
        <SelectTrigger className="w-[180px]  dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark text-sm">
          <SelectValue
            placeholder="Select a fruit"
            className="text-foreground-light text-md dark:text-foreground-dark"
          />
        </SelectTrigger>
        <SelectContent className=" dark:border-gray-800 border text-foreground-light text-md dark:text-foreground-dark">
          <SelectGroup>
            <SelectLabel className="text-foreground-light text-md dark:text-foreground-dark">
              Fruits
            </SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
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

      <Button className=" dark:border-gray-800 dark:border text-foreground-light text-md dark:text-foreground-dark text-sm">
        <AiFillDelete
          size={22}
          className="text-foreground-light text-md dark:text-foreground-dark"
        />
        Remover filtros
      </Button>
    </div>
  );
}
