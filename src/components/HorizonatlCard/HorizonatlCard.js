import React from "react";
import "./HorizontalCard.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function HorizontalCard({ items, children, detailsHandler }) {
  return (
    <>
      <h1 className=" font-semibold">{children}</h1>
      {items.map((product, index) => (
        <div
          key={index}
          className="w-80 h-40 mr-3 mb-3 border border-gray-400 rounded cursor-pointer  transition-transform transform hover:scale-95"
          onClick={() => detailsHandler(product.id)}
        >
          <div className="flex flex-row items-center p-1">
            <img className="image" src={product.image} alt={product.title} />
            <div className="p-1">
              <p className="-z-40">
                <marquee className="h-4 ml-2 text-sm text-justify marquee">
                  {product.title}
                </marquee>
              </p>
              <div className="flex flex-row justify-between p-2">
                <h1>${product.price}</h1>
                <div className="flex flex-row items-center gap-1">
                <FaStar size={14} color="#F6C324"/>
                
                <h1>{product?.rating?.rate}</h1>
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <FiShoppingCart size={30} />{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HorizontalCard;
