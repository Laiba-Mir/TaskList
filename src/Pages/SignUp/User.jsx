import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Task from "/images/Task.png";

import Pagination from "@mui/material/Pagination";

import Todo from "../Todo";

// import Dashboardicon from "../../svg-components/dashboardicon";
// import Usericon from "../../svg-components/usericon";
import Taskicon from "../../svg-components/Taskicon";
import Setting from "../../svg-components/Setting";
import Bell from "../../svg-components/Bell";
import Pic from "../../svg-components/Pic";
import Arrow from "../../svg-components/Arrow";
import Usericon2 from "../../svg-components/Usericon2";
import Dashboard2 from "../../svg-components/Dashboard2";
import Dropdown from "../../components/Dropdown";
// import { snapshot, useSnapshot } from "valtio";
// import { store } from "../../GlobalStateManagement/globalStore";

function User() {

	// const snapshot =  useSnapshot(store)
	

	const [loading, Setloading] = useState(true);
	const [people, setPeople] = useState([]);
	// const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5; // Set your desired number of items per page
	const [error, setError] = useState(null);
	const [selectedTaskId, setSelectedTaskId] = useState(null); // Track selected item id for Todo
	const [currentPage, setCurrentPage] = useState(1); // Track the current page
	
	

	// Calculate the number of tasks per page based on the fetched data's length
	// const tasksPerPage = Math.ceil(people.length / itemsPerPage);

	useEffect(() => {
		fetchPeople();
	}, []);

	const fetchPeople = async () => {
		try {
			Setloading(true);
			const response = await axios.get(
				`http://localhost:3000/api/people`
			);
			
			setPeople(response.data);
			
			Setloading(false);
			console.log(response.data);
		} catch (error) {
			console.error("Error fetching people:", error);
		}
	};

	// const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// const indexOfLastTask = currentPage * itemsPerPage;
	// const indexOfFirstTask = indexOfLastTask - itemsPerPage;
	
	// console.log("currentTasks: ", currentUserss);
	
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
	const currentItems =  people.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (event, value) => {
		setCurrentPage(value); 
	  };

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return `${date.getFullYear()}-${(date.getMonth() + 1)
			.toString()
			.padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
	};

	const calculateDaysLeft = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);
		const diffInMs = end - start;
		const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
		return diffInDays;
	};

	const handleTodoClose = () => {
		setSelectedTaskId(null);
	};

	const handleTodoClick = (taskId) => {
		if (selectedTaskId === taskId) {
			setSelectedTaskId(null);
		} else {
			setSelectedTaskId(taskId);
		}
	};




	const deleteUser = async (userId) => {
		try {
			await axios.delete(`http://localhost:3000/api/users/${userId}`);
			// If successful, update the user data by refetching it
			fetchPeople();

		} catch (error) {
			console.error("Error deleting user:", error);
			setError(
				"An error occurred while deleting the user. Please try again later."
			);
		}
	};

	return (
		<div className=" w-full h-full grid grid-rows-3 grid-flow-col bg-slate-100 absolute">
			{/* ==============================================This is sidebar ==================================== */}

			<div class="row-span-3 h-screen bg-[#FFFFFF] w-[320px] shadow-xl ">
				<section className="flex items-center m-3 p-3 border border-gray-100 shadow-lg rounded">
					<img src={Task} alt="Logo" className="mr-2 px-2" />
					<span>
						<h2 className="text-[21px] font-Roboto font-medium text-[#4BCBEB]">
							Task Manager List
						</h2>
					</span>
				</section>
				<div class="border-b border-[#F6F8FA] w-[10px] "></div>
				<h1 className="m-5 text-[16px] pl-6 pt-5 font-bold font-Poppins ">Menu</h1>
				<div className="m-4 flex items-center text-lg pl-6 p-3  ">
					<Dashboard2 />
					<div className="pl-4 text-[14px] font-Poppins text-[#64748B]">
						<Link to="/dashboard">Dashboard</Link>
					</div>
				</div>
				<div className="m-4 flex items-center  pl-6 p-3 border-2 font-bold text-[#4BCBEB] shadow-md rounded-xl border-[#F6F8FA]">
					<Usericon2 />
					<div className="pl-4 text-[#4BCBEB] text-[14px] font-Poppins">
						<Link to="/users">Users</Link>
					</div>
				</div>
				<div className="m-4 flex items-center text-lg pl-6 p-3 border-2  border-[#F6F8FA] ">
					<Taskicon />
					<div className="pl-4 text-[14px] font-Poppins text-[#64748B]">
						<Link to="/tasks">Tasks</Link>
					</div>
				</div>
				<div className="m-4 flex items-center text-lg pl-6 p-3 border-2  border-[#F6F8FA]">
					<Setting />
					<div className="pl-4 text-[14px] font-Poppins text-[#64748B]">
						<Link to="/settings">Settings</Link>
					</div>
				</div>
			</div>

			<div className="col-span-2">
				{/* Dashboard ===================================================*/}
				<div className="bg-[#FFFFFF] w-[1180px]  flex">
					<div className="text-[32px] font-Poppins p-6 font-bold right">User's</div>
					<div className="left p-6 pl-[700px] size-max">
						<Bell />
					</div>
					<div className="right p-6 pl-[5px] ">
						<Pic />
					</div>
					<div className="p-5 pl-[3px] text-[#0F172A] ">
						<Link to="/usmanshahid" className="font-bold text-[14px] font-Poppins">Usman Shahid </Link>
						<p className="text-[#64748B] text-[12px] font-Poppins">Status 200</p>
					</div>
					<div className="p-6 pl-[2px] ">
						<Arrow />
					</div>
				</div>

				{/* Bottom part */}
				<section className="bg-gray-100 p-6 ">
					
					{loading ? (
						<div className="flex items-center justify-center h-screen">
							<div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800"></div>
						</div>
					) : (
						<div className="bg-gray-50 border border-[#4BCBEB] border-[30%] rounded m-8 " >
						<div className=" text-[#0F172A] pb-4 text-[28px] font-bold p-5 font-Poppins">
						Online User
						</div>
						<table className="min-w-full divide-y divide-gray-200 ">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-6 py-3 text-left text-[18px]  text-[#06183A]-500 text-[Poppins] font-medium">
										Customer Name
									</th>
									<th className="px-6 py-3 text-left text-[18px]  text-[#06183A]-500 tracking-wider text-[Poppins] font-medium">
										Project Name
									</th>
									<th className="px-6 py-3 text-left text-[18px]  text-[#06183A]-500 tracking-wider text-[Poppins] font-medium">
										Task Start Date
									</th>
									<th className="px-6 py-3 text-left text-[18px]  text-[#06183A]-500 tracking-wider text-[Poppins] font-medium">
										Task End Date
									</th>
									<th className="px-6 py-3 text-left text-[18px]  text-[#06183A]-500 tracking-wider text-[Poppins] font-medium">
										Overdue Date
									</th>
								</tr>
							</thead>

							<tbody className="bg-white divide-y divide-gray-200">
								{currentItems.map((person) => (
									<tr key={person._id}>
										<td className="px-6 py-4 whitespace-nowrap">
											{person.customerName}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											{person.projectName}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
										{formatDate(person.taskStart)}
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
										{formatDate(person.taskEnd)}
										</td>
										<td className="px-6 py-4 whitespace-nowrap inline-flex items-center">
											{/* {person.overdueDate} */}
											{calculateDaysLeft(person.taskStart, person.taskEnd)}
											<div className="w-32 pr-72  ">
												{/* <button onClick={() => handleTodoClick(person._id)}>
													<svg
														width="28"
														height="28"
														viewBox="0 0 32 32"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
															fill="#4BCBEB"
														/>
													</svg>
												</button> */}
												<Dropdown/>

												{/* {selectedTaskId === person._id && (
													<Todo
														onDelete={() => deleteUser(person._id)}
														onClose={handleTodoClose}
													/>
												)} */}

												{/* {selectedTaskId === person._id && (
													<Dropdown
														onDelete={() => deleteUser(person._id)}
														onClose={handleTodoClose}
													/>
												)}  */}
											</div>
										</td>
									</tr>
								))}
							</tbody>
							<div className="absolute bottom-4  left-1/2  ">
						<Pagination
							count={Math.ceil(people.length / itemsPerPage)}
							page={currentPage}
							onChange={handlePageChange}
						/>
					</div>
						</table>
						

						</div>
					)}
					
					{/* <div className="m-4 flex justify-end">
						<button
							onClick={() => paginate(currentPage + 1)}
							disabled={currentUsers.length < itemsPerPage}
							className="bg-[#4BCBEB] text-white font-semibold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
							Next
						</button>
					</div> */}
					{/* <div className="absolute bottom-4  left-1/2 transform -translate-x-1/2 ">
						<Pagination
							count={Math.ceil(people.length / itemsPerPage)}
							page={currentPage}
							onChange={handlePageChange}
						/>
					</div> */}
				</section>
			</div>
		</div>
	);
}
export default User;
