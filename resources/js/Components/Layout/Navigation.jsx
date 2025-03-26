import { Link, usePage } from "@inertiajs/react";
import React from "react";

function Navigation() {
    const { url } = usePage();

    const isActive = (path) => {
        if (path === '/' && url === '/') {
            return true;
        }
        return path !== '/' && url.startsWith(path);
    };

    // Navigation links data
    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/resources", label: "Resources" },
        { path: "/news", label: "News" },
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" }
    ];
    return (
        <div>
          <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`text-[#222443] font-medium hover:text-red-500 border-b-2 transition-colors ${
                            isActive(link.path)
                                ? "border-red-500"
                                : "border-transparent hover:border-red-500"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Navigation;
