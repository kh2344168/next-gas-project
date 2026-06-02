"use client";
import { useState } from "react";
import SalesBarChart from "@/components/shared/SalesBarChart";
import SalesList from "@/components/shared/SalesList";
const summaryCards = [
  {
    value: "71,028",
    unit: "EGP",
    title: "Total Value",
    change: "▼ 2%",
    active: true,
    changeColor: "text-[#FF7A59]",
  },
  {
    value: "20,000",
    unit: "m³",
    title: "Total Sales",
    change: "▲ 50 m³",
    active: false,
    changeColor: "text-[#22D6C5]",
  },
  {
    value: "20,000",
    unit: "m³",
    title: "Avg Sales",
    change: "▼ 50 m³",
    active: false,
    changeColor: "text-[#FF7A59]",
  },
  {
    value: "1567",
    unit: "",
    title: "Total Transaction Count",
    change: "▲ 20",
    active: false,
    changeColor: "text-[#22D6C5]",
  },
];

export default function AnalyticsContent() {
  const [activeView, setActiveView] = useState("graph");
  return (
    <section className="absolute left-[66px] top-[70px] h-[calc(100%-70px)] w-[calc(100%-66px)] bg-[#f8f3f1] px-[46px] py-[28px]">
      <div className="flex gap-[26px]">
        {summaryCards.map((card) => (
          <div
            key={card.title}
            className={`h-[105px] w-[180px] rounded-[14px] px-[24px] py-[22px] ${
              card.active ? "bg-[#f6d9d2]" : "bg-white"
            }`}
          >
            <div className="flex items-start gap-[6px]">
              <h3 className="text-[28px] font-medium leading-none text-[#3D5161]">
                {card.value}
              </h3>

              {card.unit && (
                <span className="mt-[4px] text-[12px] font-bold text-[#3D5161]">
                  {card.unit}
                </span>
              )}
            </div>

            <p className="mt-[6px] text-[10px] font-extrabold text-[#3D5161]">
              {card.title}
            </p>

            <p className={`mt-[8px] text-[10px] font-bold ${card.changeColor}`}>
              {card.change}
            </p>
          </div>
        ))}
      </div>
      {/* Graph / List Toggle */}
      <div className="mt-[28px] flex w-[68%] justify-end">
        <div className="flex h-[30px] w-[190px] items-center rounded-full bg-white p-[2px]">
          <button
            type="button"
            onClick={() => setActiveView("graph")}
            className={`h-[26px] flex-1 rounded-full text-[11px] font-extrabold tracking-[1px] ${
              activeView === "graph"
                ? "bg-[#FF7A59] text-white"
                : "bg-transparent text-[#3D5161]"
            }`}
          >
            GRAPH
          </button>

          <button
            type="button"
            onClick={() => setActiveView("list")}
            className={`h-[26px] flex-1 rounded-full text-[11px] font-extrabold tracking-[1px] ${
              activeView === "list"
                ? "bg-[#FF7A59] text-white"
                : "bg-transparent text-[#3D5161]"
            }`}
          >
            LIST
          </button>
        </div>
      </div>
      <div className="mt-[28px] h-[70%] w-[68%] rounded-[14px] bg-white">
        {activeView === "graph" ? (
          <div className="h-full px-[28px] py-[22px]">
            <div className="mb-[14px] flex items-center justify-between">
              <h3 className="text-[10px] font-extrabold tracking-[1px] text-[#3D5161]">
                STATIONS ACTIVATES OVERVIEW
              </h3>

              <div className="flex items-center gap-[28px] text-[10px] font-extrabold text-[#3D5161]">
                <span className="border-b-2 border-[#FF7A59] pb-[8px] text-[#FF7A59]">
                  SALES
                </span>
                <span>TRANSACTION</span>
                <span>VALUE</span>
                <span>COMPRESSION</span>
              </div>
            </div>

            <div className="h-[190px]">
              <SalesBarChart />
            </div>
          </div>
        ) : (
          <div className="h-full px-[28px] py-[22px]">
            <h3 className="mb-[18px] text-[10px] font-extrabold tracking-[1px] text-[#3D5161]">
              STATIONS ACTIVATES OVERVIEW
            </h3>
            <SalesList />
          </div>
        )}
      </div>
    </section>
  );
}
