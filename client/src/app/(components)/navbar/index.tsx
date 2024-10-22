"use client";
import { useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSideBarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  }

  const toggleBar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  }
  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-100"
          onClick={() => {toggleBar()}}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search products and items"
            className="pr-4 py-2 pl-10 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Bell className="text-gray-500" size={20} />
          </div>
        </div>
      </div>
      
      {/* Right side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5 ">
          <div>
            <button onClick={() => {toggleDarkMode()}}>
              {!isDarkMode ? (<Moon  className="cursor-pointer text-gray-500" size={24}/>) : (<Sun className="cursor-pointer text-gray-500" size={24} />)}
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-sm font-bold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-left border-gray-300 mx-3"></hr>
          <div className="flex items-center gap-3 cursor-pointer">
            
              <Image src="https://s3-stockit-inventorymanagement.s3.ap-south-1.amazonaws.com/profile.jpg" alt="Profile" width={50} 
              height={50} className="rounded-full h-full object-cover"
              />
           
            <span className="font-semibold">Ratan</span>
          </div>
        </div>
        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
