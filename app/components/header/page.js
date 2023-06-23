"use client";
import React from "react";
import "../../nav.css";
import "../../toggleMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import ToggleMenu from "@/app/toggleMenu";

export default function Nav() {
  const [clicked, setClick] = React.useState(false);

  function toggle() {
    setClick(!clicked);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-14 shadow-md w-full md:h-[10rem] h-[18rem]">
        <div className="flex flex-row md:justify-center md:ml-0 ml-4">
          <Image
            src="/Technoscape black_ black 23_blue_20 logo.png"
            width={300}
            height={300}
            className="mt-4 md:ml-4 mb-2 w-[23rem]"
          />
        </div>
        <div className="flex flex-col md:mt-16 md:ml-2">
          <p className="font-semibold md:ml-0 md:flex-none flex justify-center">
            Vellore Institute of Technology
          </p>
          <p className="ml-0 md:flex-none flex md:justify-normal justify-center font-semibold">Dec 14-16, 2023</p>
        </div>
        <div onClick={toggle} className="md:mt-0 mt-[-21.1rem]">
          <ToggleMenu
            pageWrapId="page-wrap"
            outerContainerId="outer-container"
          />
        </div>
      </div>
      <div
        className={`sponsers md:shadow-sm w-full md:h-[8.5rem] flex md:flex-row flex-col md:pb-0 pb-[5rem] h-fit gap-[4rem]
        md:gap-[10%] justify-center md:pl-10 text-center items-center`}
        style={{
          "@media (max-width: 768px)": {
            flexWrap: "wrap",
          },    
        }}
      >
        <div className="w-[30rem] h-[6rem] flex justify-center md:gap-[10rem] gap-[4rem]">
          <Image
            src="/sdg6.png"
            width={100}
            height={100}
            className="md:w-[16rem] md:h-[7rem] w-[14rem] h-[4rem] md:mt-0 mt-5"
          />
          <Image
            src="/VITBlue.png"
            width={100}
            height={100}
            className="md:w-[13rem] md:h-[4rem] w-[14rem] h-[4rem] mt-6"
          />
        </div>
        <div className="w-[30rem] h-[6rem] flex justify-center md:gap-[10rem] gap-[4rem]">
          <Image
            src="/ynu logo.png"
            width={100}
            height={100}
            className="md:w-[14.5rem] md:h-[5rem] w-[14rem] h-[4rem] mt-1"
          />
          <Image
            src="/Danskuni.png"
            width={100}
            height={100}
            className="md:w-[14rem] md:h-[5rem] w-[14rem] h-[4rem] mt-1"
          />
        </div>
      </div>
    </div>
  );
}
