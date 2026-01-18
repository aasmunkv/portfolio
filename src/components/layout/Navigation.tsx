"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";

export default function NavigationButtons() {
    const pathname = usePathname();
    const { language, t } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (pathName: string) => {
        if (pathName === "/") return pathname === "/";
        return pathname.startsWith(pathName);
    };
    
    const navLinks = [
        { href: "/", label: t.nav.home },
        { href: `/blog/${language}`, label: t.nav.blog },
        { href: `/projects/${language}`, label: t.nav.projects },
        { href: "/about", label: t.nav.about },
    ];

    return (
        <nav className="w-full max-w-screen-lg mx-auto p-2 relative">
            {/* Desktop / Tablet */}
            <div className="hidden lg:flex justify-center gap-2">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`bg-transparent text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition dark:text-white dark:hover:bg-gray-500 ${isActive(link.href) ? 'font-bold' : ''}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden justify-between items-center">
                {/* Hamburger button */}
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition z-50"
                    aria-label="Toggle menu"
                >
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
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile menu dropdown (overlay) */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-gray-50 dark:bg-gray-800 p-2 rounded-b-lg shadow-md z-40 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition ${isActive(link.href) ? 'font-bold' : ''}`}
                            onClick={() => setMenuOpen(false)} // close menu when a link is clicked
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
