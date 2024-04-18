import React, { useState } from "react";

// import Analytics from "/images/Analytics.png";
import Task from "/images/Task.png";
// import { FA } from "@fortawesome/react-fontawesome";
// import { faDashboard } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="grid grid-flow-col w-full h-full">
      {/* This is sidebar */}
      <div class="bg-[#FFFFFF] w-[320px] ">
        <section className="flex items-center m-3 p-3 border border-gray-300 shadow-lg rounded">
          <img src={Task} alt="Logo" className="mr-2 px-2" />
          <span>
            <h2 className="text-2xl font-bold text-[#4BCBEB]">
              Task Manager List
            </h2>
          </span>
        </section>
        <div class="border-b border-[#F6F8FA] w-[10px]"></div>
        <h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <h1 className="m-4 text-lg pl-6 p-3 font-bold text-[#4BCBEB] border-2 shadow-md border-[#F6F8FA] rounded ">
          Dashboard
        </h1>
        <h1 className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          Users
        </h1>
        <h1 className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          Task
        </h1>
        <h1 className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          Settings
        </h1>
      </div>
    </div>
  );
}
export default SideBar;
