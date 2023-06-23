import React from "react";
import Card from "./Card";
import data from "./data";
import { resolve } from "styled-jsx/css";

// function resolveAfter5Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 5000);
//     });
//   }

export default async function IAC(){
    // await resolveAfter5Seconds()
    const cards = data.map(i=>
        <Card key = {i.id} name = {i.name} nation = {i.nation} uni = {i.university} image = {i.image}/>
        )
    return(
        <div className="align-center bg-white h-full text-black flex flex-col">
            <div className="flex justify-center items-center text-xl lg:text-7xl m-2 lg:m-4">International Advisory Committee</div>
            <main className="grid md:grid-cols-2 gap-10 align-center  h-full text-black">
                {cards}
            </main>
        </div>
    )
}