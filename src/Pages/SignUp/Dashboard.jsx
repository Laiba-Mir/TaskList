import React, { useState } from "react";
// import bro from "/images/new.png";
import Task from "/images/Task.png";

function Dashboard() {
  return (
    <div class="grid grid-cols-2 gap-2">
      <div class="bg-gray-100 w-[350px] ">
        <section className="flex items-center p-6 border border-gray-300">
          <img src={Task} alt="Logo" className="mr-2 px-2" />
          <span>
            <h2 className="text-2xl font-bold text-[#4BCBEB]">
              Task Manager List
            </h2>
          </span>
        </section>
        <div class="border-b border-[#F6F8FA]"></div>
        <h1 className="m-4 text-lg pt-7 font-bold">Menu</h1>
        <h1 className="m-4 text-lg pt-7 font-bold">Dashboard</h1>

        {/* <h2 className="text-3xl font-bold text-white">Task Manager List</h2> */}
      </div>
      <div class="bg-gray-400 p-4 w-3/4">Dashboard Content</div>
    </div>
  );
}
export default Dashboard;
