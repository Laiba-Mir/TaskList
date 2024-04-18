import React, { useState } from "react";
import Group from "/images/Group 154.png";
import Task from "/images/Task.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

function Notifications() {
  return (
    <div className="grid grid-flow-col w-full h-full">
      {/* This is sidebar */}
      <div class="bg-[#FFFFFF] w-[320px] ">
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
        <div className="m-4 text-lg pl-6 p-3 font-bold text-[#4BCBEB] border-2 shadow-md border-[#F6F8FA] rounded ">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/tasks">Tasks</Link>
        </div>
        <div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
          <Link to="/settings">Settings</Link>
        </div>

        {/* <FA icon={faDashboard} /> */}

        {/* <h2 className="text-3xl font-bold text-white">Task Manager List</h2> */}
      </div>
      <div className="grid grid-flow-row">
        {/* this is Dashboard */}
        <div className="bg-[#FFFFFF] w-[1155px] h-[88px] flex">
          <div className=" text-3xl p-6 font-bold right">Notifications</div>
          <div className="left p-6 pl-[700px] size-max">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="p-6 pl-[5px] ">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="pt-4 pl-[2px] font-bold text-sm ">
            <Link to="/usmanshahid">Usman Shahid</Link>
            <p className="font-normal">Status 200</p>
          </div>
          <div className="p-6 pl-[11px]  ">
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>

        {/* This is bottom part */}
        <div className="size-11/12 pl-[70px] pt-[50px]">
          <img src={Group} alt="pic" className="size-fit" />
        </div>
      </div>
    </div>
  );
}
export default Notifications;
