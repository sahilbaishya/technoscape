import React from "react";
import Card from "./Card";
import data from "./data";
export default function IAC(){
    const cards = data.map(i=>
        <Card key = {i.id} name = {i.name} nation = {i.nation} uni = {i.university} image = {i.image}/>
        )
    return(
        <body className="align-center bg-white h-full text-black flex flex-col">
        <h1 className="flex justify-center items-center text-xl lg:text-7xl m-4">International Advisory Committee</h1>
        <main className="grid md:grid-cols-2 gap-10 align-center  h-full text-black">
            {cards}
        </main>
        </body>
    )
}