"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";

export default function AboutPageComponent() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col">
            <div className="flex flex-col text-center items-center mb-4">
                <div className="relative flex items-center justify-center w-48 h-48 rounded-full border-2 border-green-500 p-0.5">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                            className="object-cover w-full h-full rounded-full"
                            src="/aktiv-kvadrat.jpg"
                            alt="Profile photo"
                            width={180}
                            height={180}
                            priority
                        />
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Åsmund Danielsen Kvitvang
                    </h2>

                    {/* <-- Legg til mt-2 her */}
                    <div className="mt-2 text-md text-gray-600 dark:text-gray-300">
                        <p>{t.common.backendDeveloper}</p>
                        <p className="text-gray-700 dark:text-gray-300">aakvitvang@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="items-left text-md">
                <p className="font-semibold mb-6 text-slate-900 dark:text-gray-200">
                    {t.about.contactIntro}{" "}
                    <a
                        href={
                        "https://www.linkedin.com/in/%C3%A5smund-danielsen-kvitvang-125012180"
                        }
                        className="hover:underline text-sky-600 dark:text-sky-400"
                    >
                        LinkedIn
                    </a>{" "}
                    {t.about.contactOutro}
                </p>

                <div className="[&>*]:mb-2 text-slate-800 dark:text-gray-300">
                    <p>{t.about.workDescription}</p>
                    <p>{t.about.educationDescription}</p>
                    <p>{t.about.skillsDescription}</p>
                </div>
            </div>
        </div>


    );
}