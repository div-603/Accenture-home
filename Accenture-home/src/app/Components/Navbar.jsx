"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Insights",
        path: "/insights",
        dropdown: [

            ,
            "Marketing",
            "Mergers & Acquisitions (M&A)",
            "Metaverse",
            "Operating Models",

        ]
    },
    {
        title: "Services",
        path: "/services",
        dropdown: [
            "Business Strategy",
            "Change Management",
            "Cloud",
            "Customer Experience",

        ]
    },
    {
        title: "Industries",
        path: "/industries",
        dropdown: [
            "Data & Analytics",
            "Digital Commerce",
            "Digital Engineering & Manufacturing",
            "Marketing",
        ]

    },
    {
        title: "Career",
        path: "/career",
        dropdown: [
            "Finance Consulting",
            "Infrastructure",
            "Marketing",
            "Mergers & Acquisitions (M&A)",
       

        ]
    },
    {
        title: "About",
        path: "/about",
        dropdown: [
            "Finance Consulting",
            "Infrastructure",
            "Marketing",
            "Mergers & Acquisitions (M&A)",

        ]
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center mr-8">
                    <Link href="/images/ACN2.png" passHref>
                        <div>
                            <img src="/images/ACN2.png" className="max-w-full" />
                        </div>
                    </Link>
                    <br></br>
                </div>

                <ul className="flex space-x-4 justify-center">
                    {navLinks.map((link, index) => (
                        <li key={index} className={link.title === "About" ? "purple" : ""}>
                            <div className="relative group">
                                <Link href={link.path}>
                                    <div className="text-white cursor-pointer group-hover:text-purple-500">
                                        {link.title}
                                        {link.title === "About" && <span className="purple-arrow">&gt;</span>}
                                    </div>
                                </Link>
                                {link.dropdown && (
                                    <div className="absolute hidden mt-2 space-y-2 bg-[#121212] group-hover:block p-2 rounded-md border border-[#33353F]">
                                        {link.dropdown.map((item, idx) => (
                                            <div key={idx} className="text-white">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-2 py-1 border border-gray-300 rounded mr-4"
                    />
                    <button className="text-white">Search</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
