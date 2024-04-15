import React from "react";

function SignUpPage() {
  return (
    <div className="flex flex-row justify-center items-center font-mono h-screen">
      <div className="flex flex-col border border-teal-700 rounded-lg p-4 w-80 items-center">
        <h1 className=" text-xl">SignUp</h1>
        <div className="flex flex-col w-full mb-1">
          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="py-2 px-3 h-9 rounded border  border-gray text-black"
          />
        </div>
        <div className="flex flex-col mt-1  w-full mb-1">
          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Your Password"
            className="py-2 px-3 h-9 rounded border border-gray text-black"
          />
        </div>
        <div className="flex flex-col mt-1  w-full mb-1">
          <label>Mobile Number</label>
          <input
            id="number"
            type="text"
            placeholder="Your Mobile Number"
            className="py-2 px-3 h-9 rounded border  border-gray text-black"
          />
        </div>
        <div className="flex flex-col mt-1  w-full mb-1">
          <label>Address</label>
          <input
            id="address"
            type="text"
            placeholder="Your Address"
            className="py-2 px-3 h-9 rounded border  border-gray text-black"
          />
        </div>
        <button className="flex justify-center border hover:bg-teal-100 border-teal-600 p-1 rounded h-9 w-full m-2 font-medium gap-1">
          SignUp
        </button>
        <p className="text-sm ">
          Allready have an account?{" "}
          <a href="/login" className="text-blue-400">
            Login
          </a>
        </p>
      </div>
      <img
        className="w-1/3"
        src={require("../../assets/images/SignUp.png")}
        alt="Logo"
      />
    </div>
  );
}

export default SignUpPage;
