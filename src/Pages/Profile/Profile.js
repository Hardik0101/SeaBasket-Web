import React from "react";

function Profile() {
  return (
    <>
      <div className="flex flex-row p-2 m-2 justify-center gap-4 max-sm:flex-wrap max-md:flex-wrap">
        <img
          className="w-40 h-40 max-sm:w-1/5 max-sm:h-1/5"
          src={require("../../assets/images/profile.png")}
          alt="Profile Img"
        />

        <div className="w-1/2 bg-white p-8 rounded shadow-md border border-teal-300 max-sm:w-4/5 max-md:w-4/5">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className=" capitalize w-full px-3 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-teal-500 "
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Address"
              >
                Address
              </label>
              <input
                className=" capitalize w-full px-3 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                type="text"
                id="address"
                placeholder="Your Address"
                required
              />
            </div>
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors w-full mb-3"
              type="submit"
            >
              Save Details
            </button>
          </form>
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors w-full"
            type="submit"
          >
            My order
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
