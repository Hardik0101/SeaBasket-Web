import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function VerticalCard() {
  const data = useSelector((data) => data);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Vertical card</h1>
    </div>
  );
}

export default VerticalCard;
