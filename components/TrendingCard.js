import React from "react";
import Image from "next/image";
import StarRatings from "./StarRatings";

export default function TrendingCard({ cardItem }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardItem.map((i, index) => (
          <div
            key={index}
            className={`h-[280px] rounded-lg p-5`}
            style={{ backgroundColor: i.color }}
          >
            <Image
              src={i.image}
              width={120}
              height={120}
              alt={i.item}
              className="rounded shadow"
            />
            <div className="mt-3">
              <p className="text-2xl font-medium text-black-medium">{i.item}</p>
              <p className="text-xl font-medium text-green-elmesText my-2">
                {i.category}
              </p>
            </div>
            <StarRatings className="my-3" star={i.stars} />
          </div>
        ))}
      </div>
    </>
  );
}
