import AnalyticsHeader from "@/components/shared/AnalyticsHeader";
import Sidebar from "@/components/shared/Sidebar";
import AnalyticsContent from "@/components/shared/AnalyticsContent";
export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <div className="relative h-[100vh] w-full border border-[#dddddd] bg-white">
        <AnalyticsHeader />
        <Sidebar />

        <AnalyticsContent />
      </div>
    </main>
  );
}