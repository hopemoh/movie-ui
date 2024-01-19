"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { LuSunDim } from "react-icons/lu";

const pageRoutes = [
  //   {
  //     name: "Movies",
  //     href: "/movies",
  //   },
  {
    name: "About",
    href: "/about",
  },
  // {
  //   name: "Privacy Policy",
  //   href: "/policy",
  // },
  // {
  //   name: "Contact Us",
  //   href: "/contact",
  // },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="top-0 opacity-75 z-50 bg-black w-full px-8 flex justify-between items-center h-16 text-black dark:text-white fixed shadow-sm font-mono">
        <Link href="/" className="text-white font-bold text-3xl font-mono">
          MuchReview
        </Link>
        <div className="flex items-center gap-5 justify-between">
          <div className="items-center gap-3 hidden md:flex">
            {pageRoutes.map((route, index) => (
              <Link
                key={index}
                href={route.href}
                className={`font-light hover:bg-blue-950 text-white px-4 py-1 rounded-full duration-300 ${
                  pathname === route.href ? "bg-blue-950" : ""
                }`}
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center gap-5">
            <CiMenuBurger className="md:hidden" />
            {/* <LuSunDim  /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
