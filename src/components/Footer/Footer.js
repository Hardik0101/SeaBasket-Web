import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white px-8 py-5">
      <div className="container mx-auto flex flex-wrap justify-between ">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-xl   font-bold">Contact Us</h3>
          <p className="mt-2">
            B-405, Navratna Corporate Park, Ambli Rd, Ashok Vatika, Ahmedabad,
            Gujarat 380058
          </p>
          <p>seaBasket@seaflux.com</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl  font-bold">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a
              href="https://twitter.com/SeafluxTech?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              className="text-white hover:text-gray-400"
            >
              <FaSquareXTwitter size={30} />
            </a>
            <a
              href="https://in.linkedin.com/company/seaflux-tech"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://www.instagram.com/seaflux.tech/?hl=en"
              className="text-white hover:text-gray-400"
            >
              <FaSquareInstagram size={30} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xl  font-bold">Newsletter</h3>
          <p className="mt-2">Subscribe to get the latest updates.</p>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Your email"
              className="py-2 px-3 w-2/3 rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-teal-500 text-gray-900 py-2 px-4 rounded-r-md hover:opacity-70 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 SeaBasket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
