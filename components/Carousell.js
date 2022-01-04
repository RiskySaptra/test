import React from "react";
import Image from "next/image";
import CarousellItem from "./CarousellItem";
import next from "../public/icon/next.png";
import prev from "../public/icon/prev.png";

export default function Carousell({ cardItem }) {
  const ref = React.useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div
        className="flex container overflow-x-scroll hide-scroll-bar scroll-smooth snap-x"
        ref={ref}
      >
        <div className="flex">
          {cardItem.map((item, index) => (
            <CarousellItem key={index} carousellItem={item} />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex mt-5 justify-end">
        <button
          className="bg-green-elmes text-white shadow hover:shadow-lg font-medium py-2 px-4 rounded-full outline-none focus:outline-none inline-flex items-center ease-linear transition-all duration-150 mr-5"
          onClick={() => scroll(-150)}
        >
          <Image src={prev} height={25} width={25} alt="prev" />
          <span className="ml-2">Prev</span>
        </button>
        <button
          className="bg-green-elmes text-white shadow hover:shadow-lg font-medium py-2 px-4 rounded-full outline-none focus:outline-none inline-flex items-center ease-linear transition-all duration-150"
          onClick={() => scroll(150)}
        >
          <span className="mr-2">Next</span>
          <Image src={next} height={25} width={25} alt="prev" />
        </button>
      </div>
    </>
  );
}
