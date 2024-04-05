"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Image from "next/image";

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
                <div className="text-2xl md:text-3xl font-bold dark:text-white text-center">
                    <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">elmajala-NFT</span> représente une initiative créative d'origine <span className="text-red-400">Tunisienne</span> <span className=" inline-block"><Image src={"/tunisia.png"} alt="" width={30} height={30} /></span> .
                </div>
                <div className="font-extralight text-md text-justify dark:text-neutral-200 py-2 max-w-sm md:max-w-xl">
                    Produire de magnifiques cartes NFT mettant en valeur des sites tunisiens et explorer de nouvelles destinations à travers tout le pays, tout en découvrant la richesse culturelle de chaque région, pour promouvoir la diversité et l'authenticité de la Tunisie.                </div>
                <button className="inline-flex text-xs md:text-base font-medium h-9 px-3 md:h-12 md:px-6 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Se Connecter avec MetaMask <span className="ml-2 inline-block"><Image src={"/metamask.png"} alt="" height={22} width={22} /></span>
                </button>
            </motion.div>
        </AuroraBackground>
    );
}
