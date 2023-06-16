"use client"
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";

export default function Card(props){
    return(
        <motion.div className="flex justify-start mx-10 my-4 shadow-lg p-8 rounded-md"
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
        >
            <div>
                <Image/>
            </div>
            <div>
                <h1>{props.name}</h1>
                <h1>{props.nation}</h1>
                <h2>{props.uni}</h2>
            </div>
        </motion.div>
    )
}