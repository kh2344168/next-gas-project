"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isFormValid = email !== "" && password !== "";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === "") {
      setError("Email is required");
      return;
    }

    if (password === "") {
      setError("Password is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");

    console.log("Login success");
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <main className="min-h-screen bg-[#f7f3f1]">
      <div className="flex min-h-screen">
        <section className="relative flex flex-1 items-center justify-center overflow-hidden">
          <Image
            src="/images/auth/login/login-img.png"
            alt=""
            width={1083}
            height={1083}
            className="absolute left-[-123px] top-0 z-0 h-[1083px] w-[1083px] opacity-100"
          />

          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold text-[#3D5161]">
              WELCOME TO FMS
            </h1>

            <p className="mt-7 max-w-lg text-2xl font-semibold text-[#3D5161]">
              Ask the admin to create an account for you to start viewing our
              Dashboards.
            </p>

            <button className="mt-8 rounded-full border-3 border-slate-700 px-8 py-2 text-xl font-semibold text-slate-700">
              Request Account
            </button>
          </div>
        </section>

        <section className="flex w-[500px] items-center justify-center bg-[#ff795c]">
          <div className="w-[80%]">
            <div className="mb-20 flex justify-center">
              <Image
                src="/images/auth/login/brk-logo-trandy.png"
                alt="TAQA logo"
                width={180}
                height={150}
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error !== "" && (
                <p className="rounded-lg bg-white/70 px-4 py-2 text-sm font-semibold text-red-600">
                  {error}
                </p>
              )}

              <input
                type="email"
                placeholder="elka@qq.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-full bg-white/60 px-6 py-4 text-lg outline-none placeholder:text-slate-600"
              />

              <div className="relative">
                <svg
                  className="absolute left-5 top-1/2 h-8 w-8 -translate-y-1/2 text-slate-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 0 0-8 0v4M6 11h12v9H6v-9Z"
                  />
                </svg>

                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-full bg-white/60 py-4 pl-14 pr-6 text-lg outline-none placeholder:text-slate-600"
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full rounded-full bg-white px-6 py-4 text-lg font-bold text-slate-700 disabled:cursor-not-allowed disabled:bg-white/50 disabled:text-slate-400"
              >
                LOGIN
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}