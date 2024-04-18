import React, { useState } from "react";
import Analytics from "/images/Analytics.png";
import Task from "/images/Task.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

function Tasks() {
  return (
    <div className=" w-full h-full grid grid-rows-3 grid-flow-col gap-4">
      {/* This is sidebar */}
      <div class="row-span-3 bg-[#FFFFFF] w-[320px] ">
        <section className="flex items-center m-3 p-3 border border-gray-300 shadow-lg rounded">
          <img src={Task} alt="Logo" className="mr-2 px-2" />
          <span>
            <h2 className="text-1xl font-bold text-[#4BCBEB]">
              Task Manager List
            </h2>
          </span>
        </section>
        <div class="border-b border-[#F6F8FA] w-[10px]"></div>
        <h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
        {/* <Link to="/dashboard">Dashboard</Link> */}
        <div className="m-4 text-lg pl-6 p-3  ">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/notifications">Users</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA] font-bold text-[#4BCBEB] shadow-md rounded">
          <Link to="/tasks">Tasks</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/settings">Settings</Link>
        </div>

        {/* <FA icon={faDashboard} /> */}

        {/* <h2 className="text-3xl font-bold text-white">Task Manager List</h2> */}
      </div>
      <div className="col-span-2">
        {/* this is Dashboard */}
        <div className="bg-[#FFFFFF] w-[1155px]  flex">
          <div className=" text-3xl p-6 font-bold right">Task</div>
          <div className="left p-6 pl-[700px] size-max">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="right p-6 pl-[5px] ">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="p-5 pl-[3px] ">
            <Link to="/usmanshahid">Usman Shahid</Link>
            <p>Status 200</p>
          </div>
          <div className="p-6 pl-[2px] ">
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>

        {/* This is bottom part */}
        <section className="bg-[#ED7176] row-span-2 col-span-2">
          <div className="flex flex-nowrap">
            <div className="p-8 m-8">
              <h2 className=" text-xl">Start date: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            <div className="p-8 m-8">
              <h2 className=" text-xl">End date: </h2>
              <input
                type="input"
                id="dateInput"
                placeholder="15-Apr-2024"
                className="m-2 border-2 border-[#4BCBEB] rounded p-1"
              />
            </div>
            <div className="flex-1 text-white bg-[#4BCBEB] rounded-lg ml-[300px] h-[34px] w-[5px] m-[70px] text-center p-2">
              <button>Add Task</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Tasks;
