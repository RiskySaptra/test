import React from "react";
import Image from "next/image";

export default function CarousellItem({ carousellItem }) {
  const { image, item, qty, color } = carousellItem;
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-[180px] h-[140px] hover:w-[190px] hover:h-[150px] m-2 hover:m-[3px] scroll-ml-2 hover:scroll-ml-[3px] snap-start rounded-lg `}
        style={{ backgroundColor: color }}
      >
        <div className="flex">
          <img {...image} width={40} height={40} alt={item} />
        </div>
        <div className="mt-3">
          <p className="text-center text-sm font-medium text-black-medium">
            {item}
          </p>
          <p className="text-center text-xs text-black-medium">{qty} Items</p>
        </div>
      </div>
    </>
  );
}
