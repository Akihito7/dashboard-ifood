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
import { ExpandIcon, XIcon } from "lucide-react";
import { useFilterContext } from "@/hooks/use-filter-context";
import { client } from "@/providers/tanstack-provider";
import { formatToMoney } from "@/utils/format-to-money";
import { useQuery } from "@tanstack/react-query";
import { SetStateAction, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { DialogHeader } from "@/components/ui/dialog";
import { getDetailsOrderById } from "@/api/get-details-order-by-id";
import { GetDetailsOrderById } from "@/api/types/get-details-order-by-id";

export function ListOrders() {
  const { usernameClient, idOrder, statusOrderId, startDate } =
    useFilterContext();
  const [openDetails, setOpenDetails] = useState(false);
  const [orderIdSelected, setOrderIdSelected] = useState<number | undefined>(
    undefined
  );

  const { data: orders } = useQuery<GetOrdersByDay>({
    queryKey: ["orders", startDate],
    queryFn: async () => getOrdersByDay(startDate),
  });

  const { data: orderSelected } = useQuery<GetDetailsOrderById[]>({
    queryKey: ["orderSelected", orderIdSelected],
    queryFn: async () => getDetailsOrderById(orderIdSelected),
  });

  const filteredOrders = filterOrders(orders?.orders, {
    usernameClient,
    idOrder,
    statusOrderId,
  });

  return (
    <div className="dark:shadow-lg border border-gray-200 dark:border-gray-800 rounded-md mt-4">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-300 dark:border-gray-700">
            <TableHead className=" text-foreground-light dark:text-foreground-dark text-sm">
              Detalhes
            </TableHead>
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
            <ItemList
              item={item}
              setOpenDetails={setOpenDetails}
              setOrderIdSelected={setOrderIdSelected}
              key={index}
            />
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDetails}>
        {openDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <DialogContent className="bg-background-light dark:bg-background-dark  text-foreground-light dark:text-foreground-dark relative w-full max-w-lg p-6 rounded-lg shadow-lg">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl font-semibold text-foreground-light flex dark:text-foreground-dark justify-between items-center">
                  Detalhes do Pedido
                  <XIcon
                    size={24}
                    className="cursor-pointer text-foreground-light flex dark:text-foreground-dark dark:hover:text-white"
                    onClick={() => setOpenDetails(false)}
                  />
                </DialogTitle>
              </DialogHeader>

              <DialogContent>
                {orderSelected &&
                Array.isArray(orderSelected) &&
                orderSelected.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-lg font-medium text-foreground-light flex dark:text-foreground-dark mt-2">
                        Informações do Pedido
                      </h2>
                      <p className="text-sm text-foreground-light flex dark:text-foreground-dark mt-2">
                        Id do pedido: {orderSelected[0].id}
                      </p>
                      <p className="text-sm text-foreground-light flex dark:text-foreground-dark">
                        Status do pedido: {orderSelected[0].status}
                      </p>
                      <p className="text-sm  text-foreground-light flex dark:text-foreground-dark">
                        Cliente: {orderSelected[0].username}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg font-medium  text-foreground-light flex dark:text-foreground-dark mb-2">
                        Itens
                      </h2>
                      <ul className="space-y-2">
                        {orderSelected[0].items.map((item, index) => (
                          <li
                            key={index}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-between items-center"
                          >
                            <div>
                              <p className="text-sm font-medium text-gray-800 dark:text-white">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-300">
                                <strong>Quantidade:</strong> {item.quantity}
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                              {item.price.toLocaleString("pt-br", {
                                currency: "BRL",
                                style: "currency",
                              })}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-lg font-medium text-foreground-light flex dark:text-foreground-dark">
                        Resumo
                      </h2>
                      <p className="text-md text-foreground-light flex dark:text-foreground-dark">
                        Total: {orderSelected[0].total_price.toLocaleString('pt-br', {
                          currency : "BRL",
                          style : "currency"
                        })}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">
                    Nenhum pedido selecionado.
                  </p>
                )}
              </DialogContent>
            </DialogContent>
          </div>
        )}
      </Dialog>
    </div>
  );
}

interface ItemListProps {
  item: Orders;
  setOpenDetails: React.Dispatch<SetStateAction<boolean>>;
  setOrderIdSelected: React.Dispatch<SetStateAction<number | undefined>>;
}
function ItemList({ item, setOpenDetails, setOrderIdSelected }: ItemListProps) {
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
    if (item.status_id === 5 ) return;

    if(item.status_id === 4) return client.invalidateQueries({ queryKey: ["orders"] });

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
      <TableCell className="font-medium text-foreground-light dark:text-foreground-dark text-sm cursor-pointer">
        <ExpandIcon
          size={18}
          onClick={() => {
            setOpenDetails(true);
            setOrderIdSelected(item.id);
          }}
        />
      </TableCell>
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
  filters: {
    usernameClient?: string;
    idOrder?: string;
    statusOrderId?: string | number;
  }
): Orders[] | undefined {
  if (!orders) return;

  const { usernameClient, idOrder, statusOrderId } = filters;

  return orders.filter((order) => {
    const matchesUsername = usernameClient
      ? order.username.toLowerCase().includes(usernameClient.toLowerCase())
      : true;

    const matchesStatus = statusOrderId
      ? order.status_id === Number(statusOrderId)
      : true;

    const matchesId = idOrder
      ? String(order.id).toLowerCase().includes(idOrder.toLowerCase())
      : true;

    return matchesUsername && matchesStatus && matchesId;
  });
}
