const stations = [
  {
    id: 1,
    color: "#FF7A59",
    iconColor: "orange",
    state: "Compression",
    alarm: 120,
    warning: 1926,
    dispenser: "2/3",
  },
  {
    id: 2,
    color: "#BBD3EA",
    iconColor: "blue",
    state: "Compression",
    alarm: 120,
    warning: 1926,
    dispenser: "0/3",
  },
  {
    id: 3,
    color: "#FF7A59",
    iconColor: "orange",
    state: "Recirculating",
    alarm: 120,
    warning: 1926,
    dispenser: "2/3",
  },
];

export default function ListView() {
  return (
    <div className="h-full w-full bg-[#f8f3f1] px-[75px] pt-[42px]">
      {/* Top Controls */}
      <div className="mb-[24px] flex items-center justify-between">
        {/* Filter */}
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center gap-[8px] text-[#3D5161]">
            <span className="text-[20px] leading-none">≡</span>
            <span className="text-[12px] font-bold">Filter:</span>
          </div>

          <select className="h-[26px] w-[120px] rounded-[6px] border-none bg-white px-[12px] text-[10px] font-medium text-[#3D5161] outline-none">
            <option>Classes</option>
          </select>

          <select className="h-[26px] w-[120px] rounded-[6px] border-none bg-white px-[12px] text-[10px] font-medium text-[#3D5161] outline-none">
            <option>Location</option>
          </select>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-[28px] text-[#3D5161]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[20px] leading-none">≡</span>
            <span className="text-[12px] font-bold">Sort by:</span>
          </div>

          <button className="text-[13px] font-extrabold">ALARM</button>
          <button className="text-[13px] font-extrabold">WARNING</button>
          <button className="text-[13px] font-extrabold">DISPENSER</button>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-[18px]">
        {stations.map((station) => (
          <div
            key={station.id}
            className="flex h-[94px] items-center rounded-[10px] bg-white px-[36px]"
          >
            {/* Station Name */}
            <div className="flex w-[270px] items-center gap-[10px]">
              <span
                className="mt-[28px] h-[8px] w-[8px] rounded-full"
                style={{ backgroundColor: station.color }}
              />

              <div className="relative">
                <img
                  src="/icons/header/gas-station-svgrepo-com.svg"
                  alt="Station"
                  className="h-[42px] w-[42px] object-contain"
                />
              </div>

              <div className="text-[13px] font-extrabold leading-[16px] tracking-[1px] text-[#3D5161]">
                STATION NAME
                <br />
                DUMMY
              </div>
            </div>

            {/* Compressor */}
            <div className="w-[180px]">
              <h3 className="text-[15px] font-extrabold leading-[17px] text-[#3D5161]">
                {station.state}
              </h3>
              <p className="text-[11px] font-bold leading-[13px] text-[#3D5161]">
                Compressor State
              </p>
            </div>

            {/* Alarm */}
            <div className="flex w-[155px] items-center gap-[16px]">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F4C9BF]">
                <span className="h-[9px] w-[9px] rounded-full bg-[#C95A4D]" />
              </span>

              <div>
                <h3 className="text-[22px] font-extrabold leading-none text-[#3D5161]">
                  {station.alarm}
                </h3>
                <p className="text-[11px] font-bold text-[#3D5161]">
                  Alarm Count
                </p>
              </div>
            </div>

            {/* Warning */}
            <div className="flex w-[170px] items-center gap-[16px]">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#FFE9A9]">
                <span className="h-[9px] w-[9px] rounded-full bg-[#FFC21A]" />
              </span>

              <div>
                <h3 className="text-[22px] font-extrabold leading-none text-[#3D5161]">
                  {station.warning}
                </h3>
                <p className="text-[11px] font-bold text-[#3D5161]">
                  Warning Count
                </p>
              </div>
            </div>

            {/* Dispenser */}
            <div className="flex items-center gap-[14px]">
              <img
                src="/icons/header/gas-station-svgrepo-com.svg"
                alt="Dispenser"
                className="h-[34px] w-[34px] object-contain"
              />

              <div>
                <h3 className="text-[22px] font-extrabold leading-none text-[#3D5161]">
                  {station.dispenser}
                </h3>
                <p className="text-[11px] font-bold text-[#3D5161]">
                  Active Dispenser
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}