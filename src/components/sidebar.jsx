import React from 'react'

export default function sidebar() {
  return (
    <div>
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
    </div>
  )
}
