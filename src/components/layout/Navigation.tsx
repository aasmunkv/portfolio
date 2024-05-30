"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";


export default function NavigationButtons() {

    const isActive = (pathName: string) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (pathName === usePathname())
    };
    return (
        // <div className="fixed bottom-0 left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <div
            className="flex w-full items-end justify-center via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto">
            {/*<div className="fixed bottom-0 left-0 flex h-36 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none lg:top-0 lg:bottom-auto">*/}
            {/*    <div className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">*/}
            <div className="pointer-events-auto flex place-items-center gap-2 p-2 lg:pointer-events-auto">
                <Link href={"/"}
                      className={`bg-transparent text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition dark:text-white dark:hover:bg-gray-500 ${isActive('/') ? 'font-bold' : ''}`}>
                    Home
                </Link>
                <Link href={"/blog"}
                      className={`bg-transparent text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition dark:text-white dark:hover:bg-gray-500 ${isActive('/blog') ? 'font-bold' : ''}`}>
                    Blog
                </Link>
                <Link href={"/projects"}
                      className={`bg-transparent text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition dark:text-white dark:hover:bg-gray-500 ${isActive('/projects') ? 'font-bold' : ''}`}>
                    Projects
                </Link>
                <Link href={"/about"}
                      className={`bg-transparent text-black px-4 py-2 rounded-lg hover:bg-gray-50 transition dark:text-white dark:hover:bg-gray-500 ${isActive('/about') ? 'font-bold' : ''}`}>
                    About
                </Link>
                {/*{path !== '/projects' && (*/}
                {/*)}*/}
            </div>
        </div>
    );
}
