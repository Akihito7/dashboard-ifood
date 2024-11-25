"use client";

import { changeOrderStatus } from "@/api/change-order-status";
import { getOrdersByDay } from "@/api/get-orders-by-day";
import { GetOrdersByDay, Orders } from "@/api/types/get-orders-by-day";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useFilterContext } from "@/hooks/use-filter-context";
import { client } from "@/providers/tanstack-provider";
import { formatToMoney } from "@/utils/format-to-money";
import { useQuery } from "@tanstack/react-query";

export function ListOrders() {
  const { usernameClient, idOrder, statusOrder, startDate } =
    useFilterContext();

  const { data: orders } = useQuery<GetOrdersByDay>({
    queryKey: ["orders", startDate],
    queryFn: async () => getOrdersByDay(startDate),
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
  const titleNextStatus = {
    1: "Aprovar",
    2: "Em Entrega",
    3: "Entregue",
    4: "Concluido",
    5: "Cancelado",
  };

  function getNextStatusIdOrder(id: number) {
    const idKey = id as keyof typeof nextStatus;
    const nextStatus = {
      1: 2,
      2: 3,
      3: 4,
      5: 5,
    };
    return nextStatus[idKey] || id;
  }

  function getTitleNextStatusOrder(statusId: keyof typeof titleNextStatus) {
    return titleNextStatus[statusId];
  }

  async function handleChangeOrderStatus() {
    if (item.status_id === 5 || item.status_id === 4) return;

    const nextStatusId = getNextStatusIdOrder(item.status_id);

    await changeOrderStatus({
      orderId: item.id,
      nextIdOrderStatus: nextStatusId,
    });

    return client.invalidateQueries({ queryKey: ["orders"] });
  }

  async function handleRefuseOrder() {
    if (item.status_id === 1) {
      await changeOrderStatus({
        orderId: item.id,
        nextIdOrderStatus: 5,
      });
      return client.invalidateQueries({ queryKey: ["orders"] });
    }
  }

  return (
    <TableRow className="border-b border-gray-300 dark:border-gray-700">
      <TableCell className="font-medium text-foreground-light dark:text-foreground-dark text-sm">
        {item.id}
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        {item.time_elapsed}
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
        <Button
          className="dark:shadow-lg border border-gray-200 dark:border-gray-800 rounded-md"
          onClick={handleChangeOrderStatus}
        >
          {getTitleNextStatusOrder(
            item.status_id as keyof typeof titleNextStatus
          )}
        </Button>
      </TableCell>
      <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">
        <Button
          className="dark:shadow-lg border border-gray-200 dark:border-gray-800 rounded-md"
          disabled={item.status_id != 1}
          onClick={handleRefuseOrder}
        >
          Cancelar
        </Button>
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
