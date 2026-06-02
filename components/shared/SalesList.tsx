const stations = [
  {
    id: 1,
    color: "#FF7A59",
    imgSrc: "/icons/header/gas-station-svgrepo-com.svg",
    title: "STATION NAME DUMMY",
    details: [
      [
        { label: "Total Sales", value: "62,721", unit: "m³" },
        { label: "Total Value", value: "550", unit: "EGP" },
      ],
      [
        { label: "Compression State", value: "Compression" },
        { label: "Total Transaction Count", value: "5161" },
      ],
      [
        { label: "Max Transaction / hour", value: "20" },
        { label: "Max Transaction Date-Time", value: "8-1-2021 | 10:16 PM" },
      ],
    ],
  },
  {
    id: 2,
    color: "#FF7A59",
    imgSrc: "/icons/header/gas-station-svgrepo-com.svg",
    title: "STATION NAME DUMMY",
    details: [
      [
        { label: "Total Sales", value: "62,721", unit: "m³" },
        { label: "Total Value", value: "550", unit: "EGP" },
      ],
      [
        { label: "Compression State", value: "Compression" },
        { label: "Total Transaction Count", value: "5161" },
      ],
      [
        { label: "Max Transaction / hour", value: "20" },
        { label: "Max Transaction Date-Time", value: "8-1-2021 | 10:16 PM" },
      ],
    ],
  },
  {
    id: 3,
    color: "#BBD3EA",
    imgSrc: "/icons/header/gas-station-svgrepo-com.svg",
    title: "STATION NAME DUMMY",
    details: [
      [
        { label: "Total Sales", value: "62,721", unit: "m³" },
        { label: "Total Value", value: "550", unit: "EGP" },
      ],
      [
        { label: "Compression State", value: "Compression" },
        { label: "Total Transaction Count", value: "5161" },
      ],
      [
        { label: "Max Transaction / hour", value: "20" },
        { label: "Max Transaction Date-Time", value: "8-1-2021 | 10:16 PM" },
      ],
    ],
  },
];

export default function SalesList() {
  return (
    <div className="h-full overflow-y-auto pr-[10px]">
      <div className="flex flex-col gap-[16px]">
        {stations.map((station) => (
          <div
            key={station.id}
            className="rounded-[14px] bg-white px-[22px] py-[16px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E8EEF2] pb-[12px]">
              <div className="flex items-center gap-[10px]">
                <span
                  className="mt-[24px] h-[8px] w-[8px] rounded-full"
                  style={{ backgroundColor: station.color }}
                />

                <img
                  src={station.imgSrc}
                  alt={station.title}
                  className="h-[38px] w-[38px] object-contain"
                />

                <h3 className="text-[14px] font-extrabold tracking-[2px] text-[#3D5161]">
                  {station.title}
                </h3>
              </div>

              <button
                type="button"
                className="text-[18px] font-bold leading-none text-[#3D5161]"
              >
                ...
              </button>
            </div>

            {/* Details */}
            <div className="grid grid-cols-3 gap-x-[34px] pt-[16px]">
              {station.details.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-[12px]">
                  {column.map((item) => (
                    <InfoRow
                      key={item.label}
                      label={item.label}
                      value={item.value}
                      unit={item.unit}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="grid grid-cols-[130px_1fr] items-center gap-[16px]">
      <p className="text-[10px] font-extrabold text-[#3D5161]">{label}</p>

      <p className="text-[10px] font-medium text-[#3D5161]">
        {value}
        {unit && <span className="ml-[8px]">{unit}</span>}
      </p>
    </div>
  );
}