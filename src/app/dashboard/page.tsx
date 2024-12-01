import { Header } from "@/components/header/header";
import { ContentDashboard } from "./content-dashboard";
import { FilterDashboard } from "./filter-dashboard";

export default function Dashboard() {
  return (
    <div className="h-screen w-full">
      <Header />

      <div className="min-h-screen w-full bg-background-light dark:bg-background-dark flex justify-center pb-4">
        <div className="max-w-[1400px] mt-20">
          <h1 className="text-foreground-light dark:text-white text-xl mb-4 font-bold">
            Dashboard
          </h1>
          <FilterDashboard />
          <ContentDashboard />
        </div>
      </div>
    </div>
  );
}
