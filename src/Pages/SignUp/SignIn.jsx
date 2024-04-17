import React, { useState } from "react";
import bro from "/images/new.png";
import vector from "/images/Vector.png";

function SignIn() {
  const [password, setPassword] = useState("");
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
  return (
    <div className="main flex justify-center items-center h-screen">
      <div className="left w-1/2 bg-[#4BCBEB] h-full px-[130px] pt-[100px] bg-[  rgba(255, 255, 255, 0.06)]">
        <div className="flex items-center">
          <img src={vector} alt="Logo" className="mr-2 px-4" />
          <span>
            <h2 className="text-3xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={bro} />
      </div>
      <div className="right w-1/2  h-full pt-[100px] ">
        <div className="flex flex-col mx-[100px]">
          <h5 className="mb-3 text-3xl font-bold">Sign In to Your Account</h5>
          <p className="text-[#64748B]">
            Welcome Back! Please Enter Your Details!
          </p>
          {/* <input
            id="fullName"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Enter Your Full Name"
            required
          /> */}
          <input
            id="email"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded mt-4"
            type="email"
            placeholder="Email"
            required
          />
          <input
            id="password"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded my-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          {passwordError && (
            <div className="text-red-500 text-xs mt-1">{passwordError}</div>
          )}
          <div className="mt-4 flex justify-between font-semibold text-sm mr-40">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className=" mb-5" type="checkbox" required />
              <span className="pl-5">
                <p>Remember me</p>
              </span>
            </label>
            <span>
              <a
                className="text-[#4BCBEB] hover:underline hover:underline-offset-4 text-sm"
                href=""
              >
                Forgot Password?
              </a>
            </span>
          </div>
          <div className="text-center md:text-left">
            <button
              className="rounded-full mt-4 px-4 py-4 w-4/5 bg-[#4BCBEB] hover:bg-blue-700  text-white uppercase text-sm tracking-wider"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="mt-8 mx-[70px] font-semibold text-sm text-slate-500 text-center md:text-left">
            Do not have an account?
            <span>
              <a
                className="text-[#4BCBEB] hover:underline hover:underline-offset-4 text-base font-bold"
                href="#"
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
