import React, { useState, useEffect } from "react";
import Logo from "../../../../public/Frontend/Images/logo.png";
import LogoWhite from "../../../../public/Frontend/Images/logowhite.png";
import Button from "../ui/Button";
import { Link } from "@inertiajs/react";
import Navigation from "./Navigation";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;

            if (currentPosition > 100) {
                if (currentPosition > scrollPosition && visible) {
                    setVisible(false);
                    setAnimating(true);
                } else if (currentPosition < scrollPosition && !visible) {
                    setVisible(true);
                    setAnimating(true);
                }
            } else {
                setVisible(true);
                setAnimating(false);
            }

            setScrollPosition(currentPosition);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollPosition, visible]);

    useEffect(() => {
        if (animating) {
            const timer = setTimeout(() => {
                setAnimating(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [animating]);

    return (
        <header
            className={`fixed w-full z-50 transition-transform duration-300 ease-in-out py-4 ${
                visible ? "translate-y-0" : "-translate-y-full"
            } bg-white shadow-md`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <img src={Logo} alt="LOGO" />
                    </div>

                    <Navigation />
                    <div class="flex items-center">
                        <a href="#" class="text-white hover:text-red-500 px-3">
                            <i class="fas fa-search"></i>
                        </a>
                        <a
                            href="#"
                            class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded hidden md:inline-block"
                        >
                            Get a Quote
                        </a>
                        <button class="md:hidden text-white">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-800">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
