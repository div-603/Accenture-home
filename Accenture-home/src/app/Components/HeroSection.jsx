"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.8, y: -50 }} // Initial scale and position
            animate={{ opacity: 1, scale: 1, y: 0 }} // Final scale and position
            transition={{ duration: 1 }}
            className="lg:py-16 text-center"
        >
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="col-span-12 place-self-center mb-8"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <br />
                        <span className="font-bold">
                            <TypeAnimation
                                sequence={[
                                    "REINVENT WHAT YOUR BUSINESS COULD BE",
                                ]}
                                wrapper="span"
                                speed={50}
                                onComplete={(currentSequence, currentText) => {
                                    // Handle animation completion here if needed
                                }}
                            />
                        </span>
                    </h1>

                    <p className="text-[#ADB7BE] text-lg sm:text-xl mb-6 lg:text-2xl font-bold">
                        Let There Be Change
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="px-6 py-3 rounded-t-full rounded-b-full bg-gradient-to-br from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 hover:shadow-lg text-white font-bold flex items-center justify-center relative transition duration-300">
                            <span className="mr-1">India</span>
                            <span className="transition-transform transform -translate-x-1 group-hover:translate-x-6 shadow">&#10132;</span>
                        </button>
                        <button className="px-6 py-3 rounded-t-full rounded-b-full bg-gradient-to-br from-primary-500 to-primary-400 hover:from-primary-400 hover:to-primary-500 hover:shadow-lg text-white font-bold flex items-center justify-center relative transition duration-300">
                            <span className="ml-1">US</span>
                            <span className="transition-transform transform translate-x-1 group-hover:translate-x-6 shadow">&#10132;</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;
