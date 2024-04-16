import React from "react";

const SignUp = () => {
  return (
    <>
      <footer className="text-3xl grid grid-cols-2 justify-items-center items-center h-screen">
        <div className="bg-[#4BCBEB]">
          <h1>Here would be pic</h1>
          {/* <img
            src="https://up.yimg.com/ib/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115"
            alt="image"
          /> */}
        </div>

        <div className="m-7">
          <h1 className="text-center text-[#0F172A] font-bold pb-12 text-6xl">
            Sign Up for an Account
          </h1>
          <div className="flex justify-center ">
            <form className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="firstName"
                  placeholder="Enter Your Full Name"
                  required
                  className="shadow appearance-none border rounded w-full py-7 px-7 mb-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Email"
                  required
                  className="shadow appearance-none border rounded w-full py-7 px-7 mb-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="shadow appearance-none border rounded w-full py-7 px-7  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <p className="py-10">Your password must have 8 characters</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-9 px-10 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SignUp;
