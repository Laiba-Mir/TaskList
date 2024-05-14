import React, { useState } from "react";
import bro from "/images/bro.png";
import vector from "/images/Vector.png";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupUer from "../../svg-components/SignupUer";
import Email from "../../svg-components/Email";
import Password from "../../svg-components/Password";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginSuccess } from '../../redux/actions/authActions';
import { store } from "../../GlobalStateManagement/globalStore";


function Login() {
	const [name, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();
  // const dispatch = useDispatch();
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            "http://localhost:3000/api/users/signup",
            { name, email, password }
        );
        if (response.data) {
            // Dispatch login action with user data
            store.data = response.data
            navigate("/dashboard");
            // dispatch(loginSuccess(response.data));
            // navigate("/signin");
        }
    } catch (err) {
        setError(err.response.data.message); // Set error message if login fails
    }
};

























  // const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await axios.post(
	// 			"http://localhost:3000/api/users/signup",
	// 			{ name, email, password }
	// 		);
	// 		// console.log(response.data); // Assuming your API returns some data upon successful signup
	// 		// Handle successful signup, e.g., redirect to another page
  //     if (response.data) {
  //       localStorage.setItem('fetchedData', JSON.stringify(response.data));
  //       console.log(response.data)
  //     }



	// 		navigate("/signin");
	// 	} catch (err) {
	// 		setError(err.response.data.message); // Assuming your API returns error messages
	// 	}
	// };


	

	// Rest of your component code remains the same

	// const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const handlePasswordChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
		if (newPassword.length < 8) {
			setPasswordError("Your password is not strong enough.");
		} else {
			setPasswordError("");
		}
	};

  // async function fetchData() {
  //   try {
  //     const response = await fetch('api/users/signup'); // Replace with your actual API endpoint
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const data = await response.json();
  //     if (data) {
  //       localStorage.setItem('fetchedData', JSON.stringify(data));
  //       console.log(data)
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     // Handle errors gracefully (e.g., display an error message to the user)
  //   }
  // }
  // fetchData();
  
  
	return (
    <div className="main flex justify-center  items-center h-screen md:flex">
			<div className="left w-1/2 md:w-1/2 h-screen bg-[#4BCBEB]  px-[130px] pt-[2%] bg-[  rgba(255, 255, 255, 0.06)] hidden md:block">
				<div className="flex md:flex items-center px-[15%] pb-[10%] ">
					<div>
						<img src={vector} alt="Logo" className=" px-4" />
					</div>
					<div>
						<h2 className="text-2xl font-Roboto font-bold text-white">
							Task Manager List
						</h2>
					</div>
				</div>
				<img src={bro} />
			</div>
			<div className="right w-1/2  h-full pt-[100px] ">
				<div className="flex flex-col  mx-[100px]">
					
          
          
          
          <form onSubmit={handleSubmit}>


						<h5 className=" mb-10 font-bold text-[24px] text-[#0F172A] font-Poppins">
							Sign Up for an Account
						</h5>

						<div className="relative pb-3">
							<div className="flex items-center  border border-solid border-gray-300 rounded-lg w-4/5">
								<div className=" mt-1 ml-2">
									<SignupUer />
								</div>
								<input
									id="fullName"
									className="text-sm flex-1 text-[14px] font-
                  Poppins px-4 py-4 border-none outline-none"
									type="text"
									placeholder="Enter Your Full Name"
									required
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
						</div>
						

						<div className="relative pb-3">
							<div className="flex items-center  border border-solid border-gray-300 rounded-lg w-4/5">
								<div className=" mt-1 ml-2">
									<Email />
								</div>
								<input
									id="email"
									className="text-sm flex-1 text-[14px] font-
                  Poppins px-4 py-4 border-none outline-none"
									type="email"
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
						</div>

					

						<div className="relative pb-4">
							<div className="flex items-center  border border-solid border-gray-300 rounded-lg w-4/5">
								<div className=" mt-1 ml-2">
									<Password />
								</div>
								<input
									id="password"
									className="text-sm flex-1 text-[14px] font-
                  Poppins px-4 py-4 border-none outline-none"
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
						</div>
            {/* {error && <div className="text-red-500 mb-4">{error}} */}
						<div className="text-red-500 text-xs mt-1">
							{handlePasswordChange}
						</div>

						{passwordError && (
							<div className="text-red-500 text-xs mt-1">{passwordError}</div>
						)}
						<div className="font-Poppins text-[#64748B] text-[12px] pb-4">
							Your password must have at least 8 characters
						</div>
						<div className="mt-4 flex justify-between font-semibold pb-7 text-sm">
							<label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
								<input className="mr-1 mb-5" type="checkbox" required />
								<span
									className="font-
Poppins text-[12px]">
									By creating an account means you agree to the
									<strong>
										Terms <br />
										and Conditions
									</strong>
									and our
									<strong> Privacy Policy</strong>
								</span>
							</label>
						</div>

						<div className="text-center md:text-left">
							{error && <div className="text-red-500">{error}</div>}


							<button
								className=" rounded-md  p-2 w-4/5 bg-[#4BCBEB] font-
                Poppins text-[24px]  text-white  "
								type="submit">
								SignUp
							</button>
						</div>
						<div className="mt-8 mx-[20%] font-Poppins text-[14px] text-slate-500 items-center md:text-left">
							Already have an account?
							<span>
								<a
									className="text-[#4BCBEB] hover:underline hover:underline-offset-4 text-base font-bold"
									href="#">
									Log In
								</a>
                    
							</span>
						</div>
              {/* {error && <div className="text-red-500">{error}</div>} */}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
