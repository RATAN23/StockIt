"use client";

import { useAppSelector } from "@/app/redux";
import { setIsSideBarCollapsed } from "@/state";
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";


interface SideBarLinkProps {
  href  : string;
  icon  : LucideIcon;
  label : string;
  isCollapsed : boolean;
}

const SideBarLink = ({
  href,
  icon : Icon,
  label,
  isCollapsed

} : SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === '/' && href === "/dashboard")

  return (
    <Link href = {href}>
      <div className={`cursor-pointer flex items-center 
        ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"}
       hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors
        ${isActive ? "bg-blue-200 text-white" : ""}
      `}>
    <Icon className="w-6 h-6 !text-gray-700"/>
    <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>
      {label}
    </span>
      </div>
    </Link>
  )
};

const SideBar = () => {
  const dispatch = useDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );

  const toggleBar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  }

  const sideBarClassNames = `fixed flex flex-col ${
    isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  }   bg-white transition-all duration-300 overflow-hidden h-full shadow-lg z-40`;

  return (
    <div className={sideBarClassNames}>
      <div className={`flex justify-between gap-3 md:justify-normal items-center pt-8 ${isSideBarCollapsed ? "px-5" : "px-8"}`}>
        <div className="">logo</div>
        <h1 className={`font-extrabold text-2xl ${isSideBarCollapsed ? "hidden" : "block"}`}>StockUp</h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-100"
          onClick={() => {toggleBar()}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}
       <div className="flex-grow mt-8">
         <SideBarLink href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSideBarCollapsed}/>
         <SideBarLink href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSideBarCollapsed}/>
         <SideBarLink href="/products" icon={Clipboard} label="Products" isCollapsed={isSideBarCollapsed}/>
         <SideBarLink href="/users" icon={User} label="Users" isCollapsed={isSideBarCollapsed}/>
         <SideBarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollapsed={isSideBarCollapsed}/>
         <SideBarLink href="/expenses" icon={CircleDollarSign} label="Expenses" isCollapsed={isSideBarCollapsed}/>
       </div>

      {/* footer */}
      <div className={`${isSideBarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-xs text-center text-gray-500">&copy; 2024 Stockit</p>
      </div>
    </div>
  );
};

export default SideBar;
