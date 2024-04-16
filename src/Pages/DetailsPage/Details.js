import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetails } from "../../store/redux/detailsSlice";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((data) => data.details.details);
  useEffect(() => {
    try {
      dispatch(fetchDetails(id));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  console.log(details);
  return (
    <div>
      <h1>Product id is : {id}</h1>
      <h1>{details.title}</h1>
      <img src={details.image} className="w-40 h-40" />
    </div>
  );
}

export default DetailsPage;
