"use client";

type HeaderProps = {
  activeView: string;
  setActiveView: (view: string) => void;
};
export default function Header({
  activeView,
  setActiveView,
}: HeaderProps) {

  return (
    <header className="absolute left-[66px] top-0 z-10 flex h-[70px] w-[calc(100%-66px)] items-center justify-between bg-white px-[70px]">
      {/* Left Info */}
      <div className="flex items-center gap-2">
        <span className="mt-[15px] h-[6px] w-[6px] rounded-full bg-[#ff7958]" />{" "}
        <img
          src="/icons/header/gas-station-svgrepo-com.svg"
          alt="Stations"
          className="h-[28px] w-[28px] object-contain"
        />
        <div className="text-[28px] font-medium leading-none text-[#3D5161]">
          {2}/{3}
        </div>
        <div className="text-[10px] font-medium leading-[13px] text-[#3D5161]">
          Monitored
          <br />
          Stations
        </div>
      </div>

      {/* Center Buttons */}
      <div className="flex h-[28px] items-center rounded-full bg-[#f3f3f3] p-[2px]">
        <button
          type="button"
          onClick={() => setActiveView("map")}
          className={`h-[30px] w-[130px] rounded-full text-[12px]  cursor-pointer font-bold tracking-[1px] ${
            activeView === "map"
              ? "bg-[#FF7A59] text-white"
              : "bg-transparent text-[#3D5161]"
          }`}
        >
          MAP VIEW
        </button>

        <button
          type="button"
          onClick={() => setActiveView("list")}
          className={`h-[30px] w-[130px] rounded-full text-[12px] cursor-pointer font-bold tracking-[1px] ${
            activeView  === "list"
              ? "bg-[#FF7A59] text-white"
              : "bg-transparent text-[#3D5161]"
          }`}
        >
          LIST VIEW
        </button>
      </div>

      {/* Right Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-start gap-[2px]">
          <span className="mt-[15px] h-[6px] w-[6px] rounded-full bg-[#ff7958]" />

          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#3D5161] text-[14px] font-medium text-[#3D5161]">
            ↻
          </div>
        </div>
        <div className="text-[28px] font-medium leading-none text-[#3D5161]">
          20s
        </div>

        <div className="text-[10px] font-medium leading-[13px] text-[#3D5161]">
          Last
          <br />
          Update
        </div>
      </div>
    </header>
  );
}
