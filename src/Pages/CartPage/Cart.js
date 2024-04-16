import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchElectronics,
  fetchMenClothing,
  fetchWomenClothing,
} from "../../store/redux/dataSlice";
import HorizontalCard from "../../components/HorizonatlCard/HorizonatlCard";

function CartPage() {
  const dispatch = useDispatch();
  const menClothing = useSelector((data) => data.data.menClothing);

  useEffect(() => {
    try {
      dispatch(fetchMenClothing());
      dispatch(fetchWomenClothing());
      dispatch(fetchElectronics());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);
  return (
    <>
      <div className="flex justify-center m-3 border border-teal-600 rounded">
        <h1 className="p-3 capitalize">Your Cart is Empty :) </h1>
      </div>
      <div className="font-mono p-2">
        <h1 className="text-xl">New Men's Clothing</h1>
        <div className="flex flex-wrap overflow-hidden justify-center xl:justify-normal">
          <HorizontalCard items={menClothing} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
