import React, { useEffect, useState } from "react";
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

function ProductPage() {
  const dispatch = useDispatch();
  const category = useSelector((data) => data.data.category);
  // const menClothing = useSelector((data) => data.data.menClothing);
  // const womenClothing = useSelector((data) => data.data.womenClothing);
  // const electronics = useSelector((data) => data.data.electronics);
  const allproducts = useSelector((data) => data.data.allproducts);
  const [modalShow, setModalShow] = useState(false);
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
    setModalShow(true);
    return console.log("filter pressed");
  }

  function sortHandler() {
    return console.log("sort pressed");
  }

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row m-2 gap-3 ">
          <h1 className="border border-teal-600 rounded p-2 hover:bg-teal-300 cursor-pointer">
            For you
          </h1>
          {category.map((items, index) => (
            <div
              key={index}
              className="border border-teal-600 rounded p-2 hover:bg-teal-300 cursor-pointer"
            >
              <h1 className="capitalize">{items}</h1>
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
      <div className="m-2 flex flex-wrap">
        <HorizontalCard items={allproducts} />
      </div>
    </>
  );
}

export default ProductPage;
