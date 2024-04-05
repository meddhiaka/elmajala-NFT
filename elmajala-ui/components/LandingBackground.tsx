"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";
import ConnectButton from "./connectButton";


export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="my-1 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white ">elmajala-NFT</div>
                <div className="text-xl md:text-3xl font-bold dark:text-white text-center">
                    représente une initiative créative d'origine <span className="text-red-400">Tunisienne</span> <span className=" inline-block"><Image src={"/tunisia.png"} alt="" width={30} height={30} /></span> .
                </div>
                <div className="font-extralight text-md text-justify dark:text-neutral-200 py-2 max-w-sm sm:max-w-xl">
                    Produire de magnifiques cartes NFT mettant en valeur des sites tunisiens et explorer de nouvelles destinations à travers tout le pays, tout en découvrant la richesse culturelle de chaque région, pour promouvoir la diversité et l'authenticité de la Tunisie.
                </div>
                <ConnectButton />
            </motion.div>
        </AuroraBackground >
    );
}
