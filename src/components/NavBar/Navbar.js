import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import "./Navbar.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navBar h-16 bg-teal-700 flex items-center justify-between p-2">
        <Link to="/">
          <div className="flex flex-row items-center gap-2 hover:cursor-pointer max-sm:w-10 max-md:w-12">
            <img
              className="w-12 rounded"
              src={require("../../assets/images/Logo.png")}
              alt="Logo"
            />
            <h1 className=" text-3xl font-bold max-sm:hidden max-md:hidden max-lg:hidden ">
              <span className="text-teal-200">Sea</span>
              <span className="text-slate-100">Basket</span>
            </h1>
          </div>
        </Link>

        {!isOpen && (
          <div className="sm:hidden" onClick={toggleNavbar}>
            <HiMenuAlt1 size={30} color="white" />
          </div>
        )}
        {isOpen && (
          <div className="sm:hidden" onClick={toggleNavbar}>
            <AiOutlineCloseCircle size={40} color="white" />
          </div>
        )}

        <ul className="flex flex-row gap-7 justify-center max-sm:hidden max-md:gap-1">
          <li className="p-1 rounded-lg">
            <Link
              to="/"
              className="text-white  text-lg hover:underline tracking-wider"
            >
              Home
            </Link>
          </li>
          <li className="p-1 rounded-lg">
            <Link
              to="/product"
              className="text-white  text-lg hover:underline tracking-wider"
            >
              Product
            </Link>
          </li>
          <li className="p-1 rounded-lg">
            <Link
              to="/cart"
              className="text-white  text-lg hover:underline tracking-wider"
            >
              Cart
            </Link>
          </li>
          <li className="p-1 rounded-lg">
            <Link
              to="/profile"
              className="text-white  text-lg hover:underline tracking-wider"
            >
              Profile
            </Link>
          </li>
          <li className="p-1 rounded-lg">
            <Link
              to="/contact"
              className="text-white  text-lg hover:underline tracking-wider"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex flex-row gap-2 items-center max-sm:hidden">
          <Link
            to="/login"
            className="bg-black text-white p-1 rounded font-medium w-20 h-8 text-center hover:opacity-80 border border-white border-3 max-md:w-14 max-md:text-sm"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-white text-black p-1 rounded font-medium w-20 h-8  text-center hover:opacity-80 border border-black border-3 max-md:w-14 max-md:text-sm"
          >
            SignUp
          </Link>
        </div>
        {/* mobile ui */}
      </nav>
      {isOpen && (
        <div className="navbarMobile fixed w-full h-screen flex justify-center p-3 bg-teal-500 sm:hidden md:hidden z-50 max-sm:flex-wrap max-md:flex-wrap">
          <ul className="flex flex-col gap-7 items-center w-screen">
            <li className="p-1 rounded-lg" onClick={toggleNavbar}>
              <Link
                to="/"
                className="text-white  text-lg hover:underline tracking-wider"
              >
                Home
              </Link>
            </li>
            <li className="p-1 rounded-lg" onClick={toggleNavbar}>
              <Link
                to="/product"
                className="text-white  text-lg hover:underline tracking-wider"
              >
                Product
              </Link>
            </li>
            <li className="p-1 rounded-lg" onClick={toggleNavbar}>
              <Link
                to="/cart"
                className="text-white  text-lg hover:underline tracking-wider"
              >
                Cart
              </Link>
            </li>
            <li className="p-1 rounded-lg" onClick={toggleNavbar}>
              <Link
                to="/profile"
                className="text-white  text-lg hover:underline tracking-wider"
              >
                Profile
              </Link>
            </li>
            <li className="p-1 rounded-lg" onClick={toggleNavbar}>
              <Link
                to="/contact"
                className="text-white  text-lg hover:underline tracking-wider"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 -mt-64">
            <Link
              onClick={toggleNavbar}
              to="/login"
              className="bg-black text-white p-1 rounded font-medium w-20 h-8 text-center hover:opacity-80 border border-white border-3"
            >
              Login
            </Link>

            <Link
              onClick={toggleNavbar}
              to="/signup"
              className="bg-white text-black p-1 rounded font-medium w-20 h-8  text-center hover:opacity-80 border border-black border-3"
            >
              SignUp
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
