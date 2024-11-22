"use client";

import { getOrdersByDay } from "@/api/get-orders-by-day";
import { GetOrdersByDay, Orders } from "@/api/types/get-orders-by-day";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFilterContext } from "@/hooks/use-filter-context";
import { formatToMoney } from "@/utils/format-to-money";
import { useQuery } from "@tanstack/react-query";

export function ListOrders() {
  const currentIsoDate = new Date().toISOString();
  const { usernameClient, idOrder, statusOrder } = useFilterContext();

  const { data: orders, error } = useQuery<GetOrdersByDay>({
    queryKey: ["orders"],
    queryFn: async () => getOrdersByDay(currentIsoDate),
  });

  const filteredOrders = filterOrders(orders?.orders, {
    usernameClient,
    idOrder,
    statusOrder,
  });

  return (
    <div className="dark:shadow-lg border border-gray-200 dark:border-gray-800 rounded-md mt-4">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-300 dark:border-gray-700">
            <TableHead className="w-[200px] text-foreground-light dark:text-foreground-dark text-sm">
              Identificador
            </TableHead>
            <TableHead className="w-[150px] text-foreground-light dark:text-foreground-dark text-sm">
              Realizado há
            </TableHead>
            <TableHead className="w-[150px] text-foreground-light dark:text-foreground-dark text-sm">
              Status
            </TableHead>
            <TableHead className="text-foreground-light dark:text-foreground-dark text-sm">
              Cliente
            </TableHead>
            <TableHead className="text-foreground-light dark:text-foreground-dark text-sm">
              Total Pedido
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders?.map((item: Orders, index) => (
            <ItemList item={item} key={index} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ItemList({ item }: { item: Orders }) {
  return (
    <TableRow className="border-b border-gray-300 dark:border-gray-700">
      <TableCell className="font-medium text-foreground-light dark:text-foreground-dark text-sm">
        {item.id}
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        {item.order_date}
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        {item.status}
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        {item.username}
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        {formatToMoney(item.total_price)}
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        Recusar pedido
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        Aceitar pedido
      </TableCell>
    </TableRow>
  );
}


function filterOrders(
  orders: Orders[] | undefined,
  filters: { usernameClient?: string; idOrder?: string; statusOrder?: string }
): Orders[] | undefined {
  if (!orders) return;

  const { usernameClient, idOrder, statusOrder } = filters;

  return orders.filter((order) => {
    const matchesUsername = usernameClient
      ? order.username.toLowerCase().includes(usernameClient.toLowerCase())
      : true;
      
    const matchesStatus = statusOrder
      ? order.status.toLowerCase().includes(statusOrder.toLowerCase())
      : true;

    const matchesId = idOrder
      ? String(order.id).toLowerCase().includes(idOrder.toLowerCase())
      : true;

    return matchesUsername && matchesStatus && matchesId;
  });
}

