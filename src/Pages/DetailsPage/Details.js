import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../store/redux/detailsSlice";
import { TripleMaze } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';
import { FaStar } from "react-icons/fa";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((data) => data.details.details);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); 
        await dispatch(fetchDetails(id));
        setTimeout(() => setIsLoading(false), 2000); 
      } catch (error) {
        console.log(error);
        setIsLoading(false); 
      }
    };

    fetchData();
    return () => {
      setIsLoading(true);
    };
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen w-screen">
        <TripleMaze text={"Loading..."} center={false} />
        </div>
      ) : (
        <div className="flex flex-row justify-center m-5 gap-5   h-screen max-sm:flex-wrap max-md:flex-wrap">
          <div>
          <img src={details.image} className="w-52" />
          </div>
          <div className="w-2/5 text-justify max-sm:w-full max-md:w-full">
            <h1 className="text-xl capitalize">{details.title}</h1>
            <div className="flex flex-row justify-between items-center text-lg mt-2">
              <h1>${details.price}</h1>
              <div className="flex flex-row items-center gap-1">
              <FaStar size={16} color="#F6C324" />
              <h1>{details?.rating?.rate}</h1>
              </div>
            </div>
            <h1 className="mt-3">About This Product:</h1>
            <h1 className="capitalize text-sm">{details.description}</h1>
            <div className="flex flex-row justify-between mt-4 max-sm:flex-wrap max-sm:gap-2 ">
              <button className="border border-teal-600 p-2 rounded-lg hover:bg-teal-300 w-32">
                Buy now
              </button>
              <button className="border border-teal-600 p-2 rounded-lg bg-teal-500 hover:bg-teal-600 w-32">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailsPage;
