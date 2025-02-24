"use client";

import AdminMenu from "./components/adminmenu";
import AdminSidebar from "./components/Adminside";
import { usePathname } from "next/navigation";
export default function AdminLayout({ children }) {
  const path = usePathname();
  const pathName = path.split("/").map((i) => i);
  const pageTitle = pathName[2]
    ? pathName[2].charAt(0).toUpperCase() + pathName[2].slice(1)
    : "Admin";
  return (
    <main className=" min-w-full h-screen overflow-hidden flex p-4 bg-[#e9e9e9] text-blue-950 gap-2">
      <AdminSidebar sidebar={false} />
      <div className="relative w-full ">
        <AdminMenu />
        <div className="w-full  bg-white flex items-center px-4">
          <h1 className="text-2xl font-bold">{pageTitle}</h1>
        </div>
        <div className="min-w-fit h-full">{children}</div>
      </div>
    </main>
  );
}
