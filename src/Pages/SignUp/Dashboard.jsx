import React, { useState } from "react";
// import Analytics from "/images/Analytics.png";
import Task from "/images/Task.png";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";



import Dashboardicon from "../../svg-components/dashboardicon";
import Usericon from "../../svg-components/usericon";
import Taskicon from "../../svg-components/Taskicon";
import Setting from "../../svg-components/Setting";
import Bell from "../../svg-components/Bell";
import Pic from "../../svg-components/Pic";
import Arrow from "../../svg-components/Arrow";




function Dashboard() {


	const [date, setDate] = useState(new Date());

	const onChange = (newDate) => {
		setDate(newDate);
	};

	const [selectedOption, setSelectedOption] = useState("Weekly");

	const handleSelectChange = (e) => {
		setSelectedOption(e.target.value);
		// You can add logic here to handle the selected option
	};

	const state = {
		labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
		datasets: [
			{
				label: "Class Strength",
				backgroundColor: [
					"#4BCBEB",
					"#4BCBEB",
					"#4BCBEB",
					"#4BCBEB",
					"#4BCBEB",
					"#4BCBEB",
					"#4BCBEB",
				],
				fill: false,
				lineTension: 0.5,
				borderColor: "#4BCBEB",
				borderWidth: 2,
				data: [10, 14, 17, 16, 19, 16, 17],
			},
		],
	};

	return (
		
		<div className=" w-full h-screen grid grid-rows-3 grid-flow-col bg-slate-100">
			{/* ==============================================This is sidebar ==================================== */}
			
			
		

			<div class="row-span-3 h-screen bg-[#FFFFFF] w-[320px] shadow-xl ">
				<section className="flex items-center m-3 p-3 border border-gray-300 shadow-lg rounded">
					<img src={Task} alt="Logo" className="mr-2 px-2" />
					<span>
						<h2 className="text-2xl font-medium text-[#4BCBEB]">
							Task Manager List
						</h2>
					</span>
				</section>
				<div class="border-b border-[#F6F8FA] w-[10px]"></div>
				<h1 className="m-5 text-lg pl-6 pt-5 font-bold ">Menu</h1>
				<div className="m-4 flex items-center text-lg pl-6 p-3 font-bold text-[#4BCBEB] shadow-md rounded-xl ">
					<Dashboardicon/>
					<div className="pl-4"><Link to="/dashboard">Dashboard</Link></div>
				</div>
				<div className="m-4 flex items-center text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
					<Usericon/>
					<div className="pl-4"><Link to="/users">Users</Link></div>
				</div>
				<div className="m-4 flex items-center text-lg pl-6 p-3 border-2  border-[#F6F8FA] ">
					<Taskicon/>
					<div className="pl-4"><Link to="/tasks">Tasks</Link></div>
				</div>
				<div className="m-4 flex items-center text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
					<Setting/>
					<div className="pl-4"><Link to="/settings">Settings</Link></div>
				</div>

				
			</div>
			
				{/*============================== this is Dashboard=================================== */}

				<div className="col-span-2">
				{/* Dashboard */}
				<div className="bg-[#FFFFFF] w-[1155px]  flex">
					<div className="text-3xl p-6 font-bold right">Dashboard</div>
					<div className="left p-6 pl-[630px] size-max">
					<Bell/>
					</div>
					<div className="right p-6 pl-[5px] ">
					<Pic/>
					</div>
					<div className="p-5 pl-[3px] ">
						<Link to="/usmanshahid">Usman Shahid</Link>
						<p>Status 200</p>
					</div>
					<div className="p-6 pl-[2px] ">
					<Arrow/>
					</div>
				</div>



				{/*============================================= This is bottom part =======================================*/}
				<section className="bg-white row-span-2 col-span-2 m-20 ">
					<h1 className="text-2xl font-bold  p-6">Analytics</h1>
					{/* ==========================This is bottom grid section for progress bar================================= */}

					<section className="  grid grid-cols-4 gap-4">
						<div className=" bg-[#F4F2FF] h-32 m-4 rounded-2xl  p-4">
							<h1 className=" pb-3 font-medium">Total Task</h1>
							<div className="mb-1 text-xl font-medium text-[#64748B]  pb-2">
								90/100
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
								<div className="bg-[#4BCBEB] h-4 rounded-full  w-4/5"></div>
							</div>
						</div>

						<div className=" bg-[#E2EFFC] h-32 m-4 rounded-2xl p-4">
							<h1 className=" pb-3 font-medium">Completed Task</h1>
							<div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
								80/100
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
								<div className="bg-[#5CB85C] h-4 rounded-full w-2/4"></div>
							</div>
						</div>

						<div className=" bg-[#FBEDD2] h-32 m-4 rounded-2xl p-4">
							<h1 className=" pb-3 font-medium">Pending Task</h1>
							<div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
								50/100
							</div>
							<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
								<div className="bg-[#F0AD4E] h-4 rounded-full  w-2/5"></div>
							</div>
						</div>

						<div className=" bg-[#E0F6F4] h-32 m-4 rounded-2xl p-4">
							<h1 className=" pb-3 font-medium"> Decline Task</h1>
							<div>
								<div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
									10/100
								</div>
								<div clasName="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
									<div className="bg-[#D9534F] h-4 rounded-full  w-1/5"></div>
								</div>
							</div>
						</div>
					</section>

					{/* ======================================This is another grid for chart and calender========================== */}

					<section className=" bg-slate-300 grid grid-cols-2  col-auto">
						<div className="flex-1 bg-white p-4 ">
							<div className=" flex">
								<h1 className="text-2xl font-bold p-6 m-1">
									Total Task Ratio{" "}
								</h1>
								<span className="dropdownbutton text-[#4BCBEB]  text-xl p-8  ml-24 font-bold ">
									<select value={selectedOption} onChange={handleSelectChange}>
										<option value="Weekly">Weekly</option>
										<option value="Monthly">Monthly</option>
										<option value="Daily">Daily</option>
									</select>
								</span>
							</div>
							<div className=" h-60  w-auto ">
								<Line
									data={state}
									options={{
										scales: {
											x: {
												display: true,
												title: {
													display: true,
												},
												grid: {
													display: false, // Hide x-axis grid lines
												},
											},
											y: {
												display: true,
												title: {
													display: true,
												},
												grid: {
													display: true, // Hide y-axis grid lines
												},
												ticks: {
													beginAtZero: false,
												},
											},
										},
										plugins: {
											legend: {
												display: false, // Hide legend
											},
										},
										responsive: true,
									}}
								/>
							</div>
						</div>
						<div className=" bg-white p-4">
							<h1 className=" text-2xl font-bold p-6 m-1">Calender</h1>
							<div className=" bg-white pl-[80px]">
								<Calendar onChange={onChange} value={date} />
								{/* <DateCalendar onChange={onChange} value={date}/> */}
							</div>
						</div>
					</section>
				</section>
			</div>
		</div>
	);
}
export default Dashboard;
