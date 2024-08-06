import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchElectronics,
  fetchMenClothing,
  fetchWomenClothing,
} from "../../store/redux/dataSlice";
import HorizontalCard from "../../components/HorizonatlCard/HorizonatlCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { TripleMaze } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";
import "@fontsource/poppins";

function HomePage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const menClothing = useSelector((data) => data.data.menClothing);
  const womenClothing = useSelector((data) => data.data.womenClothing);
  const electronics = useSelector((data) => data.data.electronics);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setIsLoading(true);
      dispatch(fetchMenClothing());
      dispatch(fetchWomenClothing());
      dispatch(fetchElectronics());
      setTimeout(() => setIsLoading(false), 1000);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }, [dispatch]);

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
          <div className="p-2 flex justify-center gap-2 ">
            <div className="flex w-1/3 max-sm:w-1/2">
              <SearchBar />
            </div>
            <button className="border border-teal-400 p-1 rounder hover:bg-teal-200 rounded h-9  ">
              Search
            </button>
          </div>
          <div className="homeDiv p-2 ">
            <h1 className="text-xl">New Men's Clothing</h1>
            <div className="flex flex-wrap justify-center r">
              <HorizontalCard
                items={menClothing}
                detailsHandler={detailsHandler}
              />
            </div>
            <h1 className="text-xl">New Women's Clothing</h1>
            <div className="flex flex-wrap overflow-hidde justify-center">
              <HorizontalCard
                items={womenClothing}
                detailsHandler={detailsHandler}
              />
            </div>
            <h1 className="text-xl">New Electronics</h1>
            <div className="flex flex-wrap overflow-hidde justify-center">
              <HorizontalCard
                items={electronics}
                detailsHandler={detailsHandler}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
