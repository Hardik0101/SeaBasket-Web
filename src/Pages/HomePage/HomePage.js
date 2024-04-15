import React, { useEffect } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchElectronics,
  fetchMenClothing,
  fetchWomenClothing,
} from "../../store/redux/dataSlice";
import HorizontalCard from "../../components/HorizonatlCard/HorizonatlCard";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage() {
  const dispatch = useDispatch();
  const menClothing = useSelector((data) => data.data.menClothing);
  const womenClothing = useSelector((data) => data.data.womenClothing);
  const electronics = useSelector((data) => data.data.electronics);

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
      <div className="p-2 flex justify-center gap-2 ">
        <div className="flex w-1/3 max-sm:w-1/2">
          <SearchBar />
        </div>
        <button className="border border-teal-400 p-1 rounder hover:bg-teal-200 rounded h-9 font-mono">
          Search
        </button>
      </div>

      <div className="font-mono p-2 ">
        <h1 className="text-xl">New Men's Clothing</h1>
        <div className="flex flex-wrap overflow-hidden max-sm:justify-center">
          <HorizontalCard items={menClothing} />
        </div>
        <h1 className="text-xl">New Women's Clothing</h1>
        <div className="flex flex-wrap overflow-hidden max-sm:justify-center">
          <HorizontalCard items={womenClothing} />
        </div>
        <h1 className="text-xl">New Electronics</h1>
        <div className="flex flex-wrap overflow-hidden max-sm:justify-center">
          <HorizontalCard items={electronics} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
