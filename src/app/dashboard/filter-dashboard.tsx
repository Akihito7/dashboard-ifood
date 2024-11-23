import { DatePickerSingle } from "@/components/date-picker-single";

export function FilterDashboard() {
  return (
    <div className="flex items-center w-full gap-2 mb-4">
      <p className="text-foreground-light text-md dark:text-foreground-dark">
        Filtros :
      </p>

      <DatePickerSingle />
    </div>
  );
}
