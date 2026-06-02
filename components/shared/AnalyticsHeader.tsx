"use client";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function AnalyticsHeader() {
  const orangeTheme = createTheme({
    palette: {
      primary: {
        main: "#FF7A59",
      },
    },
  });

  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [button, setButton] = useState("TODAY");

  const filterButtons = ["TODAY", "YESTERDAY", "LAST WEEK"];
  return (
    <header className="absolute left-[66px] top-0 z-10 h-[70px] w-[calc(100%-66px)] bg-white">
      <div className="grid h-full grid-cols-[280px_1fr_520px] items-center px-[46px]">
        {/* Left: Stations + Last Update */}
        <div className="flex items-center gap-[24px]">
          {/* Stations */}
          <div className="flex items-center gap-[8px]">
            <span className="mt-[18px] h-[6px] w-[6px] rounded-full bg-[#FF7A59]" />

            <img
              src="/icons/header/gas-station-svgrepo-com.svg"
              alt="Stations"
              className="h-[30px] w-[30px] object-contain"
            />

            <span className="text-[28px] font-medium leading-none text-[#3D5161]">
              2/3
            </span>

            <span className="text-[10px] font-medium leading-[11px] text-[#3D5161]">
              Monitored
              <br />
              Stations
            </span>
          </div>

          {/* Last Update */}
          <div className="flex items-center gap-[8px]">
            <div className="flex items-start gap-[2px]">
              <span className="mt-[18px] h-[6px] w-[6px] rounded-full bg-[#FF7A59]" />

              <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#3D5161] text-[14px] font-medium text-[#3D5161]">
                ↻
              </div>
            </div>

            <span className="text-[28px] font-medium leading-none text-[#3D5161]">
              20s
            </span>

            <span className="text-[10px] font-medium leading-[11px] text-[#3D5161]">
              Last
              <br />
              Update
            </span>
          </div>
        </div>

        {/* Center: Days */}
        <div className="flex justify-center">
          <div className="flex h-[34px] w-[400px] items-center rounded-full bg-[#f7f2f0] p-[2px]">
            {filterButtons.map((item) => (
              <button
                key={item}
                onClick={() => setButton(item)}
                className={`h-[30px] flex-1 cursor-pointer rounded-full text-[12px] font-extrabold tracking-[1px] transition-colors duration-200 ${
                  button === item
                    ? "bg-[#FF7A59] text-white"
                    : "text-[#7B8794] hover:bg-[#ffe3db] hover:text-[#FF7A59]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Dates */}
        <ThemeProvider theme={orangeTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex items-center justify-end gap-[32px]">
              {/* Start Date */}
              <div className="flex items-center gap-[12px]">
                <span className="h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent border-l-[#FF7A59]" />

                <DateTimePicker
                  label="Start date - time"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  slotProps={{
                    textField: {
                      variant: "standard",
                      sx: {
                        width: 220,
                        "& .MuiInputLabel-root": {
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#3D5161",
                        },
                        "& .MuiInputBase-input": {
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#3D5161",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#3D5161",
                          fontSize: "18px",
                        },
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "#3D5161",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#FF7A59",
                        },
                      },
                    },
                  }}
                />
              </div>

              {/* End Date */}
              <div className="flex items-center gap-[12px]">
                <span className="h-[12px] w-[12px] bg-[#FF7A59]" />

                <DateTimePicker
                  label="End date - time"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  slotProps={{
                    textField: {
                      variant: "standard",
                      sx: {
                        width: 220,
                        "& .MuiInputLabel-root": {
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#3D5161",
                        },
                        "& .MuiInputBase-input": {
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#3D5161",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#3D5161",
                          fontSize: "18px",
                        },
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "#3D5161",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#FF7A59",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </header>
  );
}
