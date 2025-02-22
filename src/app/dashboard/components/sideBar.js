import { sideBar, Logo, NavBarIcon } from "./helper";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const path = usePathname();
  return (
    <section className="min-w-fit md:w-1/4 capitalize ">
      <header className=" border border-[#02002D] p-4 ">
        <Link key="scd" href="/home">
          <Logo
            className="object-contain"
            span="text-2xl font-bold hidden md:flex"
            width={50}
            height={50}
            src={"/logo.png"}
            spanName={"Governator"}
          />
        </Link>
        {/* 
      
        */}
      </header>
      <nav className="border border-[#02002D] ">
        <ul className="py-4 space-y-8  transition ease-in-out text-nowrap">
          {sideBar.map((content, idx) => {
            const isActive = path === content.path;
            return (
              <Link key={idx + content.name} href={content.path}>
                <NavBarIcon
                  key={idx}
                  icon={content.icon}
                  className={
                    isActive
                      ? " my-1 flex items-center justify-center md:justify-start gap-3 bg-[#02002D] text-white shadow-md px-3 border-r-[#1AC268] border-r-[.5rem] transition-transform duration-300"
                      : "flex items-center justify-center md:justify-start gap-3 hover:bg-[#02002D] p-2 hover:text-white hover:shadow-md hover:px-3 transition-transform duration-300 hover:border-r-[#1AC268] hover:border-r-[.5rem]"
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
export default SideBar;
