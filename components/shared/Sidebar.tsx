"use client";

import { usePathname, useRouter } from "next/navigation";

const sidebarIcons = [
  {
    id: "control-room",
    src: "/icons/sidebar/dashboard/control-room.svg",
    alt: "Control Room",
    route: "/dashboard",
  },
  {
    id: "analytics",
    src: "/icons/sidebar/dashboard/dashboard.svg",
    alt: "Analytics",
    route: "/analytics",
  },
  {
    id: "elements",
    src: "/icons/sidebar/dashboard/elements.svg",
    alt: "Elements",
    route: "/elements",
  },
  {
    id: "notifications",
    src: "/icons/sidebar/dashboard/notifications.svg",
    alt: "Notifications",
    route: "/notifications",
  },
  {
    id: "settings",
    src: "/icons/sidebar/dashboard/settings.svg",
    alt: "Settings",
    route: "/settings",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="absolute left-0 top-0 z-20 flex h-full w-[66px] flex-col items-center rounded-r-[18px] bg-[#ff7958] py-7 text-white">
      <img
        src="/icons/sidebar/dashboard/PMS.svg"
        alt="PMS Logo"
        className="h-[40px] w-[40px] object-contain"
      />

      <nav className="flex flex-1 flex-col items-center justify-center gap-3">
        {sidebarIcons.map((icon) => {
          const isActive = pathname === icon.route;

          return (
            <button
              key={icon.id}
              type="button"
              onClick={() => router.push(icon.route)}
              className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[14px] ${
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

      <button
        type="button"
        onClick={() => router.push("/")}
        className="mt-auto flex h-[40px] w-[40px] items-center justify-center rounded-[14px] cursor-pointer"
      >
        <img
          src="/icons/sidebar/dashboard/logout.svg"
          alt="Logout"
          className="h-[44px] w-[44px] object-contain"
        />
      </button>
    </aside>
  );
}