"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageProvider";

export default function BackToBlog() {
    const { t, language } = useLanguage();

    return (
        <a href={`/blog/${language}`} className="flex items-center text-gray-600 hover:text-gray-800 dark:text-white dark:text-slate-400">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
            </svg>
            {t.common.back}
        </a>
    );
}