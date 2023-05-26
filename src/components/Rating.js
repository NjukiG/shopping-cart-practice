import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

function Rating({ rating, onClick, style }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <BsStarFill fontSize="15px" />
          ) : (
            <BsStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating;
