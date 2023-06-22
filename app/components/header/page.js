"use client";
import React from "react";
import "../../nav.css";
import Toggle from "@/app/toggleMenu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../../toggleMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import ToggleMenu from "@/app/toggleMenu";

export default function Nav() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-14 shadow-md">
        <Image
          src="/Technoscape black_ black 23_blue_20 logo.png"
          width={300}
          height={300}
          className="mt-4 ml-4 mb-2"
        />
        <p className="mt-16 font-semibold">
          Vellore Institute of Technology
          <br></br>
          Dec 14-16,2023
        </p>
        <ToggleMenu
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <div className="shadow-sm w-full h-[100px] flex flex-row gap-[4%] justify-center pl-10 text-center items-center">
        <Image src="/sdg6.png" width={100} height={100} className="uni"/>
        <Image src="/VITBlue.png" width={100} height={100} className="uni"/>
        <Image src="/ynu_logo_en.jpg" width={100} height={100} className="uni"/>
        <Image src="/Danskuni.png" width={100} height={100} className="w-[200px] h-[200px]"/>
      </div>
    </div>
  );
}
