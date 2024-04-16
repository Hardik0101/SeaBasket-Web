import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

function LoginPage() {
  return (
    <div className="flex flex-row justify-center items-center font-mono h-full my-12 max-md:flex-wrap max-sm:h-full max-sm:my-9">
      <img
        className="w-1/3 max-sm:hidden max-md:w-2/3"
        src={require("../../assets/images/Login.png")}
        alt="Logo"
      />

      <div className="flex flex-col border  border-teal-700 rounded-lg p-4 w-1/4 items-center max-lg:w-1/2 max-xl:w-1/3 max-sm:w-3/4">
        <h1 className=" text-xl">Login</h1>
        <div className="flex flex-col  w-full">
          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="py-2 px-3 h-9 rounded border  border-gray text-black"
          />
        </div>
        <div className="flex flex-col mt-3  w-full">
          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Your Password"
            className="py-2 px-3 h-9 rounded border border-gray text-black"
          />
        </div>
        <a href="/signup" className="text-sm text-blue-400 mt-2">
          Forget Password?
        </a>
        <button className="flex justify-center border hover:bg-teal-100 border-teal-600 p-1 rounded h-9 w-full m-3 gap-1 text-teal-900 font-bold">
          Login
        </button>
        <p>━━━━━━ or Login With ━━━━━━</p>
        <div className="flex flex-row items-center">
          <button className="flex flex-row items-center border h-8 hover:bg-teal-200 border-teal-600 rounded p-2 m-2 font-medium gap-1">
            <FcGoogle size={20} />
            <p className="max-sm:hidden">Google</p>
          </button>
          <button className="flex flex-row items-center border h-8 hover:bg-teal-200 border-teal-600 rounded p-2 m-2 font-medium gap-1">
            <FaFacebookSquare size={20} color="blue" />
            <p className="max-sm:hidden">Facebook</p>
          </button>
        </div>
        <p className="text-sm">
          Don't have an account?{" "}
          <a className="text-blue-400" href="/signup">
            Request Now
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
