"use client";
import ListView from "@/components/shared/ListView";
import dynamic from "next/dynamic";
import Header from "@/components/shared/Header";

const MapView = dynamic(() => import("@/components/shared/MapView"), {
  ssr: false,
});

import { useState } from "react";
import Sidebar from "@/components/shared/Sidebar";


export default function DashboardPage() {

  const [view, setView] = useState("map");
  return (
    <main className="min-h-screen bg-[#f7f7f7] ">
      <div className="relative h-[100vh] w-full border border-[#dddddd] bg-white">
        <Header activeView={view} setActiveView={setView} />

        <section className="absolute left-[66px] top-[70px] h-[calc(100%-70px)] w-[calc(100%-66px)] overflow-hidden bg-[#f5f5f5]">
          {view === "map" ? <MapView /> : <ListView />}
        </section>
        {/* Sidebar */}
        <Sidebar />
      </div>
    </main>
  );
}
