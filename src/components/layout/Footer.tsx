"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageProvider";

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const { language, toggleLanguage: toggleLanguageState, t } = useLanguage();

    // Custom toggle that also changes URL
    const handleToggleLanguage = () => {
        const newLang = language === "en" ? "no" : "en";
        toggleLanguageState(); // update context
        
        const parts = pathname.split("/").filter(Boolean);

        if (parts[0] === "blog" || parts[0] === "projects") {
            // For /blog/en/slug and /projects/en
            parts[1] = newLang;
            router.push("/" + parts.join("/"));
        }
    };

    // Map language to flag image path
    const flagSrc = language === "en" ? "/flags/uk.svg" : "/flags/no.svg";
    const altText = language === "en" ? "English" : "Norwegian";

    return (
        <footer className="w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-4 py-6">
            
            {/* Top row: language + download */}
            <div className="flex flex-row flex-wrap items-center gap-6">

            <a
            href="/CV_AasmundDanielsenKvitvang_Anomalab.pdf"
            download
            className="
                inline-flex items-center gap-2 rounded-2xl
                px-5 py-3 text-white font-medium shadow-lg
                bg-gradient-to-r from-sky-500 to-indigo-600
                hover:from-sky-600 hover:to-indigo-700
                active:scale-95 transition

                dark:from-gray-800 dark:to-gray-900
                dark:hover:from-gray-700 dark:hover:to-gray-800
                dark:shadow-none
            "
            >
            {t.common.downloadCV}
            </a>

            <button
                onClick={handleToggleLanguage}
                className="rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800 transition"
                aria-label="Toggle language"
            >
                <Image
                src={flagSrc}
                alt={altText}
                width={24}
                height={24}
                className="inline-block"
                />
            </button>

            
            </div>

            {/* Footer text always at the bottom */}
            <p className="text-center text-sm text-slate-400">
            {t.common.footerText}
            </p>
        </div>
        </footer>

    );
}
