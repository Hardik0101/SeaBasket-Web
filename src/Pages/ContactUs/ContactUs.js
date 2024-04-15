import React from "react";

function ContactUs() {
  return (
    <div className="flex justify-center items-center h-screen font-mono">
      <div className="w-1/2 bg-white p-8 rounded shadow-md border border-teal-300">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
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
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-teal-500"
              id="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
