import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";

const MIN_RATING = 1;

const MAX_RATING = 6;
const Product = ({ id, title, price, description, category, image }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 padding-10">
      <p className="absolute top-2 right-1 text-xs italic ">{category}</p>
      <Image src={image} height={100} width={100} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex ">
        {/* we care about index as value id undefined */}
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-3">
          <img
            className="w-12"
            src="https://links.papareact.com/f90"
            alt=""
          ></img>

          <p className="text-xs text-gray-500">Free next day delivery</p>
        </div>
      )}
      {/* mt-auto button-ensures correct height */}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
