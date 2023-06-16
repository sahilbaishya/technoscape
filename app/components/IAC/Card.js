"use client"
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";

export default function Card(props){
    return(
        <motion.div className="flex justify-start mx-12 my-4 shadow-lg  rounded-md"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
        >
            <div className=" relative h-[150px] w-[150px] rounded-md">
                <Image
                src={props.image}
                alt="prof pic"
                fill={true}
                />
            </div>
            <div className="m-4 flex flex-col gap-2 lg:gap-4 text-sm lg:text-base">
                <h1>{props.name}</h1>
                <h1>{props.nation}</h1>
                <h2>{props.uni}</h2>
            </div>
        </motion.div>
    )
}