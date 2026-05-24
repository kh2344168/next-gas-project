"use client";
import ListView from "@/components/shared/ListView";
import dynamic from "next/dynamic";
import Header from "@/components/shared/Header";
const MapView = dynamic(() => import("@/components/shared/MapView"), {
  ssr: false,
});
import { useState } from "react";
const sidebarIcons = [
  {
    id: "control-room",
    src: "/icons/sidebar/dashboard/control-room.svg",
    alt: "Control Room",
  },
  {
    id: "dashboard",
    src: "/icons/sidebar/dashboard/dashboard.svg",
    alt: "Dashboard",
  },
  {
    id: "elements",
    src: "/icons/sidebar/dashboard/elements.svg",
    alt: "Elements",
  },
  {
    id: "notifications",
    src: "/icons/sidebar/dashboard/notifications.svg",
    alt: "Notifications",
  },
  {
    id: "settings",
    src: "/icons/sidebar/dashboard/settings.svg",
    alt: "Settings",
  },
];

export default function DashboardPage() {
  const [activeIcon, setActiveIcon] = useState("control-room");
  const [view, setView] = useState("map");
  return (
    <main className="min-h-screen bg-[#f7f7f7] ">
      <div className="relative h-[100vh] w-full border border-[#dddddd] bg-white">
       <Header activeView={view} setActiveView={setView} />

 <section className="absolute left-[66px] top-[70px] h-[calc(100%-70px)] w-[calc(100%-66px)] overflow-hidden bg-[#f5f5f5]">
  {view === "map" ? <MapView /> : <ListView />}
</section>
        {/* Sidebar */}
        <aside className="absolute left-0 top-0 flex h-full w-[66px] flex-col items-center rounded-r-[18px] bg-[#ff7958] py-7 text-white">
          {/* Logo */}
          <img
            src="/icons/sidebar/dashboard/PMS.svg"
            alt="PMS Logo"
            className="h-[40px] w-[40px] object-contain"
          />

          {/* Menu Icons */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-3">
            {sidebarIcons.map((icon) => {
              const isActive = activeIcon === icon.id;

              return (
                <button
                  key={icon.id}
                  type="button"
                  onClick={() => setActiveIcon(icon.id)}
                  className={` flex h-[40px] w-[40px] items-center cursor-pointer  justify-center rounded-[14px] ${
                    isActive ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="h-[27px] w-[27px] object-contain"
                  />
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <button
            type="button"
            className="mt-auto flex h-[40px] w-[40px] items-center justify-center rounded-[14px]"
          >
            <img
              src="/icons/sidebar/dashboard/logout.svg"
              alt="Logout"
              className="h-[44px] w-[44px] object-contain"
            />
          </button>
        </aside>
      </div>
    </main>
  );
}
