import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchCategory,
  fetchElectronics,
  fetchJeweleryItems,
  fetchMenClothing,
  fetchWomenClothing,
} from "../../store/redux/dataSlice";
import HorizontalCard from "../../components/HorizonatlCard/HorizonatlCard";
import { GrSort } from "react-icons/gr";
import { BiFilter } from "react-icons/bi";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { TripleMaze } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

function ProductPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const category = useSelector((data) => data.data.category);
  const allproducts = useSelector((data) => data.data.allproducts);
  const menClothing = useSelector((state) => state.data.menClothing);
  const womenClothing = useSelector((state) => state.data.womenClothing);
  const electronics = useSelector((state) => state.data.electronics);
  const jewelery = useSelector((state) => state.data.jewelery);
  const [pressed, setPressed] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setIsLoading(true);
      dispatch(fetchCategory());
      dispatch(fetchMenClothing());
      dispatch(fetchWomenClothing());
      dispatch(fetchElectronics());
      dispatch(fetchAllProducts());
      dispatch(fetchJeweleryItems());
      setTimeout(() => setIsLoading(false), 2000);
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  function getProductData(item) {
    let productData = null;
    switch (item) {
      case "men's clothing":
        productData = menClothing;
        break;
      case "women's clothing":
        productData = womenClothing;
        break;
      case "jewelery":
        productData = jewelery;
        break;
      case "electronics":
        productData = electronics;
        break;
      default:
        item = null;
        productData = allproducts;
        break;
    }
    setPressed(productData);
    setActiveItem(item);
  }

  function filterHandler() {
    return console.log("filter pressed");
  }

  function sortHandler() {
    return console.log("sort pressed");
  }

  function detailsHandler(id) {
    navigate(`/details/${id}`);
  }

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <TripleMaze text={"Loading..."} center={false} />
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-between items-center max-sm:flex-wrap max-sm:justify-center">
            <div className="items flex flex-row m-2 gap-3">
              <h1
                className="border border-teal-600 rounded p-2 hover:bg-teal-300 cursor-pointer max-sm:text-sm"
                onClick={() => getProductData()}
                style={
                  activeItem === null
                    ? { backgroundColor: "#00897B", color: "white" }
                    : {}
                }
              >
                For you
              </h1>
              {category.map((items, index) => (
                <div
                  key={index}
                  onClick={() => getProductData(items)}
                  style={
                    activeItem === items
                      ? { backgroundColor: "#00897B", color: "white" }
                      : {}
                  }
                  className="border border-teal-600 rounded p-2 hover:bg-teal-300 cursor-pointer max-sm:h-10  "
                >
                  <h1 className="capitalize max-sm:text-sm max-sm:w-32">
                    {items}
                  </h1>
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
            <HorizontalCard items={pressed} detailsHandler={detailsHandler} />
          </div>
        </>
      )}
    </>
  );
}

export default ProductPage;
