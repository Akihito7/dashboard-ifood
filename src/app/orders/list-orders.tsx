import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ListOrders() {
  return (
    <div className="dark:shadow-lg border border-gray-200 dark:border-gray-800 rounded-md mt-4">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-300 dark:border-gray-700">
            <TableHead className="w-[200px] text-foreground-light dark:text-foreground-dark text-sm">Identificador</TableHead>
            <TableHead className="w-[150px] text-foreground-light dark:text-foreground-dark text-sm ">Realizado ha</TableHead>
            <TableHead className="w-[150px] text-foreground-light dark:text-foreground-dark text-sm">Status</TableHead>
            <TableHead className="text-foreground-light dark:text-foreground-dark text-sm">Cliente</TableHead>
            <TableHead className="text-foreground-light dark:text-foreground-dark text-sm">Total Pedido</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b border-gray-300 dark:border-gray-700">
            <TableCell className="font-medium text-foreground-light dark:text-foreground-dark text-sm">JFAKDFAKLJSDFLJ</TableCell>
            <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">ha 10 minutos</TableCell>
            <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">Em Preparo</TableCell>
            <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">Guilherme Akihito</TableCell>
            <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">$250.00</TableCell>
            <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">$250.00</TableCell>
            <TableCell className="text-foreground-light dark:text-foreground-dark text-sm">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
