import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Task from "/images/Task.png";

// import Dashboardicon from "../../svg-components/dashboardicon";
// import Usericon from "../../svg-components/usericon";
import Taskicon from "../../svg-components/Taskicon";
import Setting from "../../svg-components/Setting";
import Bell from "../../svg-components/Bell";
import Pic from "../../svg-components/Pic";
import Arrow from "../../svg-components/Arrow";
import Usericon2 from "../../svg-components/Usericon2";
import Dashboard2 from "../../svg-components/Dashboard2";

function User() {

const[loading , Setloading] = useState(true);

    
const [people, setPeople] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // Set your desired number of items per page

// Calculate the number of tasks per page based on the fetched data's length
// const tasksPerPage = Math.ceil(people.length / itemsPerPage);

useEffect(() => {
    fetchPeople();
}, [currentPage]);

const fetchPeople = async () => {
    try {
		Setloading(true);
        const response = await axios.get(`http://localhost:3000/api/people?page=${currentPage}`);
        setPeople(response.data.data);
		Setloading(false);
        console.log(response.data.data);
    } catch (error) {
        console.error("Error fetching people:", error);
    }
};

const paginate = (pageNumber) => setCurrentPage(pageNumber);


const indexOfLastTask = currentPage * itemsPerPage;
const indexOfFirstTask = indexOfLastTask - itemsPerPage;
const currentTasks = people

console.log("currentTasks: ", currentTasks)


	return (
		

		<div className=" w-full h-full grid grid-rows-3 grid-flow-col bg-slate-100">



			
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
				<div className="m-4 flex items-center text-lg pl-6 p-3  ">
					<Dashboard2/>
					<div className="pl-4"><Link to="/dashboard">Dashboard</Link></div>
				</div>
				<div className="m-4 flex items-center text-lg pl-6 p-3 border-2 font-bold text-[#4BCBEB] shadow-md rounded-xl border-[#F6F8FA]">
					<Usericon2/>
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


			<div className="col-span-2">
				{/* Dashboard ===================================================*/}
				<div className="bg-[#FFFFFF] w-[1180px]  flex">
					<div className="text-3xl p-6 font-bold right">User's</div>
					<div className="left p-6 pl-[700px] size-max">
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



				{/* Bottom part */}
				<section className="bg-gray-200 p-6  ">
				<div className=" text-black pb-4 text-[25px] font-bold">Online User</div>
				{loading ? (
					<div className="flex items-center justify-center h-screen">
					<div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-800"></div>
					</div>
				) : (      

					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-s  text-[#06183A]-500 text-[Poppins] font-bold">
									Customer Name
								</th>
								<th className="px-6 py-3 text-left text-s  text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
									Project Name
								</th>
								<th className="px-6 py-3 text-left text-s  text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
									Start Date
								</th>
								<th className="px-6 py-3 text-left text-s  text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
									End Date
								</th>
								<th className="px-6 py-3 text-left text-s  text-[#06183A]-500 tracking-wider text-[Poppins] font-bold">
									Overdue Date
								</th>
							</tr>
						</thead>

						<tbody className="bg-white divide-y divide-gray-200">
							{currentTasks.map((person) => (
								<tr key={person._id}>
									<td className="px-6 py-4 whitespace-nowrap">
										{person.customerName}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{person.projectName}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{person.taskStart}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{person.taskEnd}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{person.overdueDate}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					 )};
					<div className="m-4 flex justify-end">
						<button
							onClick={() => paginate(currentPage + 1)}
							disabled={currentTasks.length < itemsPerPage}
							className="bg-[#4BCBEB] text-white font-semibold py-2 px-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed">
							Next
						</button>
					</div>
					 
				</section>
		
			</div>
		</div>
	);
}
export default User;
