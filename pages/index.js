import Image from "next/image";
import Appbar from "../components/AppBar";
import Carousell from "../components/Carousell";
import Footer from "../components/Footer";
import TrendingCard from "../components/TrendingCard";
import {
  navItem,
  categoryreceipt,
  trendingreceipt,
} from "../dummyFile/dummyFIle";

import banner from "../public/Banner.png";

const Banner = () => (
  <Image src={banner} width={500} height={500} alt="banners" />
);

export default function Home() {
  return (
    <>
      <div className="mb-10 content_bg">
        <Appbar item={navItem} />
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="lg:basis-1/2">
            <div className="pt-5 mb-10">
              <h1 className="text-4xl lg:text-7xl font-medium leading-none text-green-elmesText mb-2 lg:pr-[150px]">
                Good Food Us Good Mood
              </h1>
              <div className="flex justify-center pb-10 lg:hidden">
                <div className="bg-gray-100/70 p-[40px] rounded-full">
                  <div className="flex">
                    <Banner />
                  </div>
                </div>
              </div>
              <p className="text-base font-normal leading-relaxed mt-0 mb-4 text-gray-700 lg:pr-[200px]">
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </p>
            </div>
            <div>
              <button
                className="bg-green-elmes text-white active:bg-green-elmes font-bold text-md px-5 py-2 rounded-full shadow-lg hover:shadow-xl outline-none focus:outline-none mr-5 mb-5 ease-linear transition-all duration-150"
                type="button"
              >
                Daftar Sekarang
              </button>
              <button
                className="bg-gray-200 text-black-medium active:bg-green-elmes text-md px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                About Us
              </button>
            </div>
          </div>
          <div className="hidden lg:flex basis-1/2">
            <div className="flex justify-center pb-10">
              <div className="bg-gray-100/70 p-[60px] rounded-full">
                <div className="flex">
                  <Banner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 container px-4 mx-auto flex flex-wrap flex-col">
        <h1 className="text-1l lg:text-3xl font-medium leading-none text-black-medium mb-2">
          Browser Our Category
        </h1>
        <h1 className="text-1l lg:text-3xl font-medium leading-none text-green-elmesText mb-2">
          Receipt
        </h1>
      </div>
      <div className="container lg:px-4 mx-auto flex flex-wrap flex-col">
        <Carousell cardItem={categoryreceipt} />
      </div>
      <div className="mt-10 container px-4 mx-auto flex flex-wrap flex-col">
        <h1 className="text-1l lg:text-3xl font-medium leading-none text-black-medium mb-2">
          Browser Our Trending
        </h1>
        <h1 className="text-1l lg:text-3xl font-medium leading-none text-green-elmesText mb-2">
          Receipt
        </h1>
      </div>
      <div className="mt-10 container px-4 mx-auto flex flex-col">
        <TrendingCard cardItem={trendingreceipt} />
      </div>
      <div className="mt-10 container px-4 mx-auto flex flex-col items-center">
        <div>
          <button
            className="bg-green-elmes text-white active:bg-green-elmes font-bold text-md px-5 py-4 rounded-full shadow-lg hover:shadow-xl outline-none focus:outline-none mr-5 mb-[200px] ease-linear transition-all duration-150"
            type="button"
          >
            ALL Receipt
          </button>
        </div>
      </div>
      <div className="hidden lg:flex mt-10 container px-4 mx-auto">
        <Footer />
      </div>
      <div className="text-sm mt-10 container px-4 mx-auto flex flex-col items-center mb-10">
        <div>
          <h1 className="uppercase text-grey-500">
            © 2021 Elemes id. All rights reserved
          </h1>
        </div>
      </div>
    </>
  );
}
