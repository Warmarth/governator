import Link from "next/link";
import { Logo, NavBarIcon } from "./helper";
import { usePathname } from "next/navigation";
import { adminSideBar } from "./helper";

function AdminSidebar() {
  const pathname = usePathname();
  return (
    <section className="min-w-fit md:w-1/4 capitalize">
      <header className=" border border-[#02002D] p-4 ">
        <Logo
          className="object-contain"
          span="text-2xl font-bold hidden md:flex "
          width={50}
          height={50}
          src={"/logo.png"}
          spanName={"Governator"}
        />
      </header>
      <nav className="border border-[#02002D] min-h-full ">
        <ul className="py-4 space-y-8 transition ease-in-out text-nowrap">
          {adminSideBar.map((content, idx) => {
            const isActive = pathname === content.path; // Check if the link is active
            return (
              <Link key={idx + content.name} href={content.path}>
                <NavBarIcon
                  key={idx}
                  icon={content.icon}
                  className={
                    isActive
                      ? "flex items-center justify-center md:justify-start gap-3 bg-[#02002D] text-white shadow-md px-3 border-r-[#1AC268] border-r-[.5rem] transition-transform duration-300" // Active styles
                      : "flex items-center justify-center md:justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem]" // Inactive styles
                  }
                  span="text-md hidden md:flex"
                  iconName={content.name}
                />
              </Link>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
export default AdminSidebar;
