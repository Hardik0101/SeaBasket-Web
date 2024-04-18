import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchElectronics,
  fetchMenClothing,
  fetchWomenClothing,
} from "../../store/redux/dataSlice";
import HorizontalCard from "../../components/HorizonatlCard/HorizonatlCard";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menClothing = useSelector((data) => data.data.menClothing);
  const womenClothing = useSelector((data) => data.data.womenClothing);

  useEffect(() => {
    try {
      dispatch(fetchMenClothing());
      dispatch(fetchWomenClothing());
      dispatch(fetchElectronics());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  function detailsHandler(id) {
    navigate(`/details/${id}`);
  }
  return (
    <>
      <div className="flex justify-center m-3 border border-teal-600 rounded">
        <h1 className="p-3 capitalize">Your Cart is Empty :) </h1>
      </div>
      <div className=" p-2">
        <h1 className="text-xl">New Men's Clothing</h1>
        <div className="flex flex-wrap overflow-hidden justify-center xl:justify-normal">
          <HorizontalCard items={menClothing} detailsHandler={detailsHandler} />
        </div>
        <h1 className="text-xl">New Women's Clothing</h1>
        <div className="flex flex-wrap overflow-hidden justify-center xl:justify-normal">
          <HorizontalCard items={womenClothing} detailsHandler={detailsHandler} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
