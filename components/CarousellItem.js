import React from "react";
import Image from "next/image";

export default function CarousellItem({ carousellItem }) {
  const { image, item, qty, color } = carousellItem;
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-[240px] h-[200px] hover:w-[250px] hover:h-[210px] m-5 hover:m-[15px] snap-center rounded-lg `}
        style={{ backgroundColor: color }}
      >
        <div className="flex">
          <img {...image} width={60} height={60} alt={item} />
        </div>
        <div className="mt-4">
          <p className="text-center text-md font-medium text-black-medium">
            {item}
          </p>
          <p className="text-center text-sm text-black-medium">{qty} Items</p>
        </div>
      </div>
    </>
  );
}
