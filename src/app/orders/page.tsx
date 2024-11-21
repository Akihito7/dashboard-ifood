import { Header } from "@/components/header";
import { FiltersOrders } from "./filters-orders";
import { ListOrders } from "./list-orders";

export default function Orders() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-background-light dark:bg-background-dark flex justify-center">
        <div className="max-w-[1400px] mt-4">
          <h1 className="text-foreground-light dark:text-white text-xl mb-4 font-bold">Pedidos</h1>
          <FiltersOrders />
          <ListOrders />
        </div>
      </div>
    </>
  );
}
