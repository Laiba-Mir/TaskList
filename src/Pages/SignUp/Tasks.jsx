import React, { useState } from "react";
// import Analytics from "/images/Analytics.png";
import Task from "/images/Task.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskForm from "./TaskForm";
import {
	faBell,
	faUser,
	faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";


function Tasks() {
	const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
	return (
		<div className=" w-full  grid grid-rows-3 grid-flow-col">

			{/* ==============================================This is sidebar ==================================== */}

			<div class="row-span-3 bg-[#FFFFFF] w-[320px] shadow-xl ">
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
					<Link to="/users">Users</Link>
				</div>
				<div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA] font-bold text-[#4BCBEB] shadow-md rounded-xl">
					<Link to="/tasks">Tasks</Link>
				</div>
				<div className="m-4 text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
					<Link to="/settings">Settings</Link>
				</div>

				{/* <FA icon={faDashboard} /> */}

				{/* <h2 className="text-3xl font-bold text-white">Task Manager List</h2> */}
			</div>
				
        {/*============================== this is Dashboard=================================== */}

			<div className="col-span-2">

				<div className="bg-[#FFFFFF] w-[1170px] flex m-1  border-gray-100 shadow-lg rounded">
					<div className=" text-4xl p-6 font-bold right">Task</div>
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

				{/*============================================= This is bottom part =======================================*/}
				<section className="bg-slate-100 row-span-2 col-span-2">
					<div className="flex flex-nowrap">
						<div className="p-8 m-3">
							<h2 className=" text-xl font-bold">Start date: </h2>
							<input
								type="input"
								id="dateInput"
								placeholder="15-Apr-2024"
								className="m-2 border-2 border-[#4BCBEB] rounded p-1"
							/>
						</div>
						<div className="p-8 m-3">
							<h2 className=" text-xl font-bold">End date: </h2>
							<input
								type="input"
								id="dateInput"
								placeholder="15-Apr-2024"
								className="m-2 border-2 border-[#4BCBEB] rounded p-1"
							/>
						</div>
						{showForm && <TaskForm onClose={toggleForm} />}
            <div className="flex-1 text-white bg-[#4BCBEB] rounded-lg ml-[300px] h-[34px] w-[5px] m-[70px] text-center p-2">
              <button onClick={toggleForm}>Add Task</button>
						</div>
					</div>
					<div className="flex ">
						<div className="pl-12 m-3 flex-1 ">
							<h2 className=" text-xl font-bold ">Enter Title: </h2>
							<input
								type="input"
								id="dateInput"
								placeholder="15-Apr-2024"
								className="m-2 border-2 border-[#4BCBEB] rounded p-1"
							/>
						</div>
						<div className="flex-1 text-white bg-[#4BCBEB] rounded-lg mr-[800px] h-[34px] w-[90px]  text-center p-2 mt-12">
							<button>Search</button>
						</div>
					</div>

            	{/* ==========================This is bottom grid section================================= */}
					
          		<section className="  grid grid-cols-3 gap-4">


						<div class="bg-white  border-[#4BCBEB] m-6 shadow-2xl  p-4 rounded-lg">
							<div className="pb-5">
								<h1 className="font-bold text-xl">Title:</h1>
								<p>Lorem ipsum</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Description:</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
									ipsa quia expedita rem dolorum deserunt? Quas recusandae,
									odit, nam dicta unde placeat dolor animi esse tempora eum
									necessitatibus fuga delectus?
								</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Attachment:</h1>
								<div>
									<img
										src="https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}"
										alt="Random Image"
										className="w-full h-40 p-2 "></img>
								</div>
							</div>
							<div className="flex flex-nowrap">
								<div className="">
									<h2 className=" text-base font-bold ">Start date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
								<div className=" ml-32 ">
									<h2 className=" text-base font-bold">End date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
							</div>
						</div>



            <div class="bg-white  border-[#4BCBEB] m-6 shadow-2xl p-4 rounded-lg">
							<div className="pb-5">
								<h1 className="font-bold text-xl">Title:</h1>
								<p>Lorem ipsum</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Description:</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
									ipsa quia expedita rem dolorum deserunt? Quas recusandae,
									odit, nam dicta unde placeat dolor animi esse tempora eum
									necessitatibus fuga delectus?
								</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Attachment:</h1>
								<div>
									<img
										src="https://picsum.photos/200/300"
										alt="Random Image"
										className="w-full h-40 p-2 "></img>
								</div>
							</div>
							<div className="flex flex-nowrap">
								<div className="">
									<h2 className=" text-base font-bold ">Start date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
								<div className=" ml-32 ">
									<h2 className=" text-base font-bold">End date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
							</div>
						</div>





            <div class="bg-white  border-[#4BCBEB] m-6 shadow-2xl  p-4 rounded-lg">
							<div className="pb-5">
								<h1 className="font-bold text-xl">Title:</h1>
								<p>Lorem ipsum</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Description:</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
									ipsa quia expedita rem dolorum deserunt? Quas recusandae,
									odit, nam dicta unde placeat dolor animi esse tempora eum
									necessitatibus fuga delectus?
								</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Attachment:</h1>
								<div>
									<img
										src="https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}"
										alt="Random Image"
										className="w-full h-40 p-2 "></img>
								</div>
							</div>
							<div className="flex flex-nowrap">
								<div className="">
									<h2 className=" text-base font-bold ">Start date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
								<div className=" ml-32 ">
									<h2 className=" text-base font-bold">End date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
							</div>
						</div>





            <div class="bg-white  border-[#4BCBEB] m-6  p-4 rounded-lg shadow-2xl">
							<div className="pb-5">
								<h1 className="font-bold text-xl">Title:</h1>
								<p>Lorem ipsum</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Description:</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
									ipsa quia expedita rem dolorum deserunt? Quas recusandae,
									odit, nam dicta unde placeat dolor animi esse tempora eum
									necessitatibus fuga delectus?
								</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Attachment:</h1>
								<div>
									<img
										src="https://picsum.photos/200/300"
										alt="Random Image"
										className="w-full h-40 p-2 "></img>
								</div>
							</div>
							<div className="flex flex-nowrap">
								<div className="">
									<h2 className=" text-base font-bold ">Start date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
								<div className=" ml-32 ">
									<h2 className=" text-base font-bold">End date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
							</div>
						</div>




            <div class="bg-white  border-[#4BCBEB] m-6 shadow-2xl  p-4 rounded-lg">
							<div className="pb-5">
								<h1 className="font-bold text-xl">Title:</h1>
								<p>Lorem ipsum</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Description:</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
									ipsa quia expedita rem dolorum deserunt? Quas recusandae,
									odit, nam dicta unde placeat dolor animi esse tempora eum
									necessitatibus fuga delectus?
								</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Attachment:</h1>
								<div>
									<img
										src="https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}"
										alt="Random Image"
										className="w-full h-40 p-2 "></img>
								</div>
							</div>
							<div className="flex flex-nowrap">
								<div className="">
									<h2 className=" text-base font-bold ">Start date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
								<div className=" ml-32 ">
									<h2 className=" text-base font-bold">End date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
							</div>
						</div>




            <div class="bg-white  border-[#4BCBEB] m-6 shadow-2xl  p-4 rounded-lg">
							<div className="pb-5">
								<h1 className="font-bold text-xl">Title:</h1>
								<p>Lorem ipsum</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Description:</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
									ipsa quia expedita rem dolorum deserunt? Quas recusandae,
									odit, nam dicta unde placeat dolor animi esse tempora eum
									necessitatibus fuga delectus?
								</p>
							</div>
							<div className="pb-5">
								<h1 className="font-bold text-xl">Attachment:</h1>
								<div>
									<img
										src="https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}"
										alt="Random Image"
										className="w-full h-40 p-2 "></img>
								</div>
							</div>
							<div className="flex flex-nowrap">
								<div className="">
									<h2 className=" text-base font-bold ">Start date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
								<div className=" ml-32 ">
									<h2 className=" text-base font-bold">End date: </h2>
									<p className="text-sm">15-Apr-2024</p>
								</div>
							</div>
						</div>

						
           
					</section>
				</section>
			</div>
		</div>
	);
}
export default Tasks;
