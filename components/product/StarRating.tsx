import React, { ReactNode } from "react";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

function StarRating({
  number,
  type,
}: {
  type: "filled" | "half" | "empty";
  number: number;
}) {
  return (
    <>
      {type === "filled" &&
        Array(number)
          .fill(" ")
          .map((star, index) => <FaStar key={index} color="gold" />)}
      {type === "half" &&
        Array(number)
          .fill(" ")
          .map((star, index) => <FaStarHalfAlt key={index} color="gold" />)}
      {type === "empty" &&
        Array(number)
          .fill(" ")
          .map((star, index) => <FaRegStar key={index} color="gold" />)}
    </>
  );
}

export default StarRating;
