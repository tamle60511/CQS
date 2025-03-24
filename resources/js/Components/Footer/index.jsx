import React from "react";
import { Link } from "@inertiajs/react";
import logoImage from '../../assets/images/logo.png';
function Footer() {
    return (
        <section className="">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                        <img src={logoImage} alt="Logo" />
                        <p className="font-normal text-base lg:text-sm text-gray-600 font-['Roboto']">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. A amet vitae vel id id porttitor ut in.
                            Integer pretium{" "}
                        </p>
                    </div>

                    <div className="w-1/2 md:w-1/6 px-4 mb-4 md:mb-0">
                        <h5 className="font-semibold text-sm uppercase mb-3">
                            links
                        </h5>

                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/products"
                                    className="font-medium text-sm py-2"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resources"
                                    className="font-medium text-sm py-2"
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/news"
                                    className="font-medium text-sm py-2"
                                >
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="font-medium text-sm py-2"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="font-medium text-sm py-2"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 md:w-1/4 px-4 mb-4 md:mb-0">
                        <h5 className="font-semibold text-sm uppercase mb-3">
                            follow our social account
                        </h5>

                        <div className="flex items-center">
                            <a href="#!" className="mr-3">
                                facbook
                            </a>
                            <a href="#!" className="mx-3">
                                Instagram
                            </a>
                            <a href="#!" className="ml-3">
                                WhatsApp
                            </a>
                        </div>

                        <div className="mt-5">
                            <h5 className="font-semibold text-sm uppercase mb-3">
                                CONTACT US
                            </h5>
                            <div className="flex items-center mb-3">
                                Email
                                <span className="font-semibold text-sm uppercase ml-2">
                                    cqs-tect@gmail.com.tw
                                </span>
                            </div>
                            <div className="flex items-center">
                                Phone
                                <span className="font-semibold text-sm uppercase ml-2">
                                    +123 456 789
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4">
                        <h5 className="font-semibold text-sm uppercase mb-3">
                            subscribe
                        </h5>

                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded font-normal text-base lg:text-sm font-['Roboto'] mb-3"
                            placeholder="Enter your email"
                        />
                        <button className="font-semibold text-sm text-white uppercase px-4 py-2 bg-orange-500 shadow hover:bg-orange-600 transition-colors">
                            send
                        </button>
                    </div>
                </div>

                <div className="text-center font-normal font-['Roboto'] text-base lg:text-sm text-gray-600 mt-5">
                    Copyright CQS. 2025 All Right Reserved
                </div>
            </div>
        </section>
    );
}

export default Footer;
