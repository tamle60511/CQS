import React, { useState } from "react";
import { Link } from "@inertiajs/react";

function Navigation() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <div
                className={`fixed inset-0 lg:hidden z-50 bg-gray-900 transform ${
                    toggleMenu ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col w-full h-full p-4">
                    <div className="w-full">
                        <div className="flex items-center justify-between mb-4">
                            <Link
                                href="/"
                                className="text-2xl font-semibold text-white"
                            >
                                BUILD<span className="text-orange-500">UP</span>
                            </Link>
                            <button
                                onClick={() => setToggleMenu(false)}
                                className="cursor-pointer"
                            >
                                close
                            </button>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="font-medium text-sm text-white py-2"
                            >
                                Home
                            </Link>
                            <Link
                                href="/products"
                                className="font-medium text-sm text-white py-2"
                            >
                                Products
                            </Link>
                            <Link
                                href="/resources"
                                className="font-medium text-sm text-white py-2"
                            >
                                Resources
                            </Link>
                            <Link
                                href="/news"
                                className="font-medium text-sm text-white py-2"
                            >
                                News
                            </Link>
                            <Link
                                href="/about"
                                className="font-medium text-sm text-white py-2"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="font-medium text-sm text-white py-2"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu backdrop */}
            {toggleMenu && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setToggleMenu(false)}
                ></div>
            )}

            {/* Main navigation */}
            <nav className="bg-gray-900 relative z-20">
                <div className="container mx-auto px-4 relative">
                    <div className="flex items-center justify-between gap-10 h-16">
                        <Link
                            href="/"
                            className="text-3xl font-bold text-white"
                        >
                            C<span className="text-red-500">Q</span>S
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setToggleMenu(true)}
                            className="lg:hidden flex flex-col space-y-1 cursor-pointer ml-auto"
                            aria-label="Toggle menu"
                        >
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden lg:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <Link
                                        href="/"
                                        className="font-semibold text-sm text-white opacity-70 uppercase hover:opacity-100 hover:text-orange-500 transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/products"
                                        className="font-medium text-sm text-white py-2"
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/resources"
                                        className="font-medium text-sm text-white py-2"
                                    >
                                        Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/news"
                                        className="font-medium text-sm text-white py-2"
                                    >
                                        News
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="font-medium text-sm text-white py-2"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="font-medium text-sm text-white py-2"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <a
                            href="#!"
                            className="hidden lg:block ml-auto font-semibold text-sm text-white border border-white px-6 py-2 uppercase hover:bg-white hover:text-black transition-colors"
                        >
                            get a quote
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;
