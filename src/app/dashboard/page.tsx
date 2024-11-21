import { Header } from "@/components/header";
import { ContentDashboard } from "./content-dashboard";

export default function Dashboard() {
  return (
    <div className="h-screen w-full">
      <Header />
      <ContentDashboard />
    </div>
  );
}
