"use client";
import { HomeHeader } from "./components/homeHeader";
export default function Layout({ children }) {
  return (
    <main className="bg-black space-y-6 px-3 py-3 bg-[url('/Group.svg')] ">
      <HomeHeader />
      <div>{children}</div>
    </main>
  );
}
