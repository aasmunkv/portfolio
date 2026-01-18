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
                    <h2 className="text-lg font-semibold">Åsmund Danielsen Kvitvang</h2>
                    <div className="text-md text-gray-600">
                        <p>{t.common.backendDeveloper}</p>
                        <p>aakvitvang@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="items-left text-lg">
                <p className="font-semibold mb-6">
                    {t.about.contactIntro}{" "}
                    <a href={"https://www.linkedin.com/in/%C3%A5smund-danielsen-kvitvang-125012180"} className="hover:underline">
                        LinkedIn
                    </a>{" "}
                    {t.about.contactOutro}
                </p>
                <div className="[&>*]:mb-2">
                    <p>{t.about.workDescription}</p>
                    <p>{t.about.educationDescription}</p>
                    <p>{t.about.skillsDescription}</p>
                </div>
            </div>
        </div>
    );
}