import React from "react";
import Card from "./Card";
import data from "./data";
export default function IAC(){
    const cards = data.map(i=>
        <Card key = {i.id} name = {i.name} nation = {i.nation} uni = {i.university}/>
        )
    return(
        <main className="grid md:grid-cols-2 gap-10 align-center bg-white h-full text-black">
            {cards}
        </main>
    )
}