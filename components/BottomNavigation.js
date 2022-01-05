import React from "react";
import menu from "../public/icon/menu.png";

export default function BotomNavigation() {
  return (
    <>
      {/* <div className="w-full h-screen shadow"> */}
      {/* <!-- <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile--> */}
      <section className="flex container fixed inset-x-0 bottom-0 z-10 bg-white shadow md:hidden">
        <div className="flex container flex-row">
          <div className="basis-1/3 flex flex-col justify-center items-center active:bg-gray-200 active:shadow">
            <img
              {...menu}
              width={40}
              height={40}
              alt={"Home"}
              className="mt-2"
            />
            <h1>Home</h1>
          </div>
          <div className="basis-1/3 flex flex-col justify-center items-center active:bg-gray-200 active:shadow">
            <img
              {...menu}
              width={40}
              height={40}
              alt={"Home"}
              className="mt-2"
            />
            <h1>Promotions</h1>
          </div>
          <div className="basis-1/3 flex flex-col justify-center items-center active:bg-gray-200 active:shadow">
            <img
              {...menu}
              width={40}
              height={40}
              alt={"Home"}
              className="mt-2"
            />
            <h1>Other</h1>
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
}
