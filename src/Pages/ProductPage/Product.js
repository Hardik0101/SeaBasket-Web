import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategory,
  fetchElectronics,
  fetchMenClothing,
  fetchWomenClothing,
} from "../../store/redux/dataSlice";
import HorizontalCard from "../../components/HorizonatlCard/HorizonatlCard";
import { GrSort } from "react-icons/gr";
import { BiFilter } from "react-icons/bi";
import "./Product.css";

function ProductPage() {
  const dispatch = useDispatch();
  const category = useSelector((data) => data.data.category);
  const allproducts = useSelector((data) => data.data.allproducts);

  useEffect(() => {
    try {
      dispatch(fetchCategory());
      dispatch(fetchMenClothing());
      dispatch(fetchWomenClothing());
      dispatch(fetchElectronics());
      dispatch(fetchAllProducts());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  function filterHandler() {
    return console.log("filter pressed");
  }

  function sortHandler() {
    return console.log("sort pressed");
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center max-sm:flex-wrap max-sm:justify-center">
        <div className="items flex flex-row m-2 gap-3">
          <h1 className="border border-teal-600 rounded p-2 hover:bg-teal-300 cursor-pointer max-sm:text-sm">
            For you
          </h1>
          {category.map((items, index) => (
            <div
              key={index}
              className="border border-teal-600 rounded p-2 hover:bg-teal-300 cursor-pointer max-sm:h-10"
            >
              <h1 className="capitalize max-sm:text-sm max-sm:w-32">{items}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-2">
          <div
            className="border border-teal-700 p-1 rounded cursor-pointer hover:bg-teal-100"
            onClick={filterHandler}
          >
            <BiFilter size={30} />
          </div>
          <div
            className="border border-teal-700 p-1 rounded mr-2 cursor-pointer hover:bg-teal-100"
            onClick={sortHandler}
          >
            <GrSort size={30} />
          </div>
        </div>
      </div>
      <hr />
      <div className="m-2 flex flex-wrap justify-center">
        <HorizontalCard items={allproducts} />
      </div>
    </>
  );
}

export default ProductPage;
