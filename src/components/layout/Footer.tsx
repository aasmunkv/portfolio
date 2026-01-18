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
        <footer className='w-full'>
            <div className="flex h-full justify-center items-center p-4">
                <div className="text-center flex flex-col items-center gap-2">
                    {/* Language toggle */}
                    <button
                        onClick={handleToggleLanguage}
                        className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
                    <p className="text-sm text-slate-400">
                        {t.common.footerText}
                    </p>
                </div>
            </div>
        </footer>
    );
}
