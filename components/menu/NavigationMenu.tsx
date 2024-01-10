import { Raleway } from "next/font/google";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { TiHomeOutline } from "react-icons/ti";
import { FaOpencart } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { PiInfoThin } from "react-icons/pi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { GiClothes } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
const navigationFont = Raleway({ weight: ["400"], subsets: ["latin"] });

export const menu = [
  {
    name: "Home",
    path: "/",
    icon: <TiHomeOutline color="" />,
  },
  {
    name: "Products",
    path: "/products",
    icon: <GiClothes color="" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <PiInfoThin />,
  },

  {
    name: "Careers",
    path: "/careers",
    icon: <MdOutlineWorkHistory />,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: <FaOpencart />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <BsPerson />,
  },
];

function NavigationMenu({
  setIsSheetOpen,
  setDisplayContent,
}: {
  setIsSheetOpen?: Dispatch<SetStateAction<boolean>>;
  setDisplayContent?: Dispatch<SetStateAction<"navigation" | "category">>;
}) {
  const pathname = usePathname();
  return (
    <ul
      className={`flex gap-4 text-md   flex-col lg:flex-row  ${navigationFont.className}`}
    >
      {menu.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          onClick={() => {
            setIsSheetOpen && setIsSheetOpen(false);
          }}
        >
          <li
            className={`header-menu-navigation ${
              pathname === item.path
                ? " bg-slate-200 dark:bg-slate-600"
                : " bg-slate-500/10"
            } `}
          >
            <p className="mt-1">{item.icon}</p>
            <p>{item.name}</p>
          </li>
        </Link>
      ))}
      <li
        className="p-3 flex hover:cursor-pointer md:hidden  gap-1 lg:p-2 rounded-md bg-slate-400/10 hover:bg-slate-200 transition-all dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-blue-400 hover:scale-110 "
        onClick={() => {
          setDisplayContent && setDisplayContent("category");
        }}
      >
        <p className="mt-1">
          <GoListUnordered />
        </p>
        Category
      </li>
    </ul>
  );
}

export default NavigationMenu;
