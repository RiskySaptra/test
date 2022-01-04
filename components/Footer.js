import React from "react";
import Image from "next/image";

const logoloader = () => {
  return `https://www.elemes.id/_nuxt/img/logo.ee5b17c.svg`;
};

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-6 bg-[#F9FFF6] shadow rounded p-20">
        <div className=" col-span-2">
          <Image
            loader={logoloader}
            src={"https://www.elemes.id/_nuxt/img/logo.ee5b17c.svg"}
            alt="Logo"
            height={50}
            width={200}
          />
          <p className="text-sm font-normal leading-relaxed` text-gray-700 pr-[200px] mt-10">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium leading-relaxed` text-gray-800 mb-10">
            Categories
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            Cupcake
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            Pizza
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            Kebab
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            Salmon
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            Dougnut
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium leading-relaxed` text-gray-800 mb-10">
            About Us
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            About Us
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            FAQ
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-2">
            Report Problem
          </p>
        </div>
        <div className=" col-span-2">
          <p className="text-xl font-medium leading-relaxed` text-gray-800 mb-10">
            Newsletter
          </p>
          <p className="text-md font-normal leading-relaxed` text-gray-700  mb-8">
            Get now free 50% discount for alll products on your first order
          </p>
          <div className="flex flex-wrap items-stretch w-full mb-8 relative">
            <input
              type="text"
              className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative shadow"
              placeholder="Your Email Address"
            />
            <div className="flex -mr-px">
              <button className="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 bg-green-elmes whitespace-no-wrap text-white text-sm shadow active:shadow-lg">
                SEND
              </button>
            </div>
          </div>

          <p className="text-md font-normal leading-relaxed` text-black  mb-2">
            elemesid@gmail.com
          </p>
          <p className="text-md font-normal leading-relaxed` text-black  mb-2">
            0888 1111 2222
          </p>
        </div>
      </div>
    </>
  );
}
