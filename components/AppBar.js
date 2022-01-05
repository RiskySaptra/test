import React from "react";
import Image from "next/image";

const logoloader = () => {
  return `https://www.elemes.id/_nuxt/img/logo.ee5b17c.svg`;
};

export default function Appbar({ item }) {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex flex-wrap justify-center">
              <Image
                loader={logoloader}
                src={"https://www.elemes.id/_nuxt/img/logo.ee5b17c.svg"}
                alt="Logo"
                height={50}
                width={200}
              />
            </div>
            <div className="flex items-center lg:hidden">
              <div>
                <button
                  className="bg-green-elmes text-white active:bg-green-elmes font-bold text-[12px] px-2 py-1 rounded-full shadow active:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {item.map((nav, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="relative px-3 py-2 flex items-center text-s font-medium leading-snug text-gray-700 hover:opacity-75"
                    href={nav.link}
                  >
                    {nav.title}
                    {nav.notification && (
                      <span className="absolute bg-red-600 px-[8px] py-[3px] text-[10px] text-white font-bold rounded-full -top-2 -right-1">
                        {nav.notification}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex">
            <button
              className="text-black-medium background-transparent font-bold px-4 py-2 text-s outline-none focus:outline-none mr-10 mb-1 ease-linear transition-all duration-150 hover:opacity-75 shadow active:shadow-lg"
              type="button"
            >
              Masuk
            </button>
            <button
              className="bg-green-elmes text-white active:bg-green-elmes font-bold text-s px-4 py-2 rounded-full shadow active:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
