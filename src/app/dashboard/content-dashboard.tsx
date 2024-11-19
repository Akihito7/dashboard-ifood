import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

export function ContentDashboard() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-background-dark flex justify-center py-4">
      <div className="flex flex-col max-w-[1400px] px-12">
        <h1 className="text-foreground-light dark:text-white text-xl mb-4 font-bold">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Receita total (mês)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                R$ 65.575,00
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">-76.66% </span>em relação ao mês
                passado
              </p>
            </CardFooter>
          </Card>

          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Pedidos (mês)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                35
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">-76.66% </span>em relação ao mês
                passado
              </p>
            </CardFooter>
          </Card>

          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Pedidos (dia)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                0
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">-76.66% </span>em relação ao mês
                passado
              </p>
            </CardFooter>
          </Card>

          <Card className="py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
            <CardTitle>
              <CardTitle className="text-foreground-light dark:text-foreground-dark text-md mb-4">
                Cancelamentos (mês)
              </CardTitle>
            </CardTitle>

            <CardContent className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-3xl font-semibold">
                6
              </p>
            </CardContent>

            <CardFooter className="p-0">
              <p className="text-foreground-light dark:text-foreground-dark text-sm">
                <span className="text-red-400">-76.66% </span>em relação ao mês
                passado
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <Card className="h-96 py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
    
            </Card>
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <Card className="h-96 py-4 px-4 flex flex-col shadow-md dark:shadow-lg border border-gray-200 dark:border-gray-800">
  
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
