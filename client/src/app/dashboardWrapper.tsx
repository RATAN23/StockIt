"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/navbar";
import SideBar from "@/app/(components)/sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(()=>{
      if(isDarkMode){
        document.documentElement.classList.add("dark");
      }else{
        document.documentElement.classList.remove("dark");
      } 
  },);

  return (
    <div
      className={`${isDarkMode ? "dark" : "light"} 
    flex bg-gray-100 text-gray-900 w-full min-h-screen `}
    >
      <SideBar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-100
      ${isSideBarCollapsed ? "md:pl-24" : "md:pl-72"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashBoardLayout>{children}</DashBoardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
