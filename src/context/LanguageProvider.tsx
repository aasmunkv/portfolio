"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "no";

interface Translations {
    nav: {
        home: string;
        blog: string;
        projects: string;
        about: string;
    };
    common: {
        back: string;
        backendDeveloper: string;
        footerText: string;
    };
    about: {
        contactIntro: string;
        contactOutro: string;
        workDescription: string;
        educationDescription: string;
        skillsDescription: string;
    };
}

const translations: Record<Language, Translations> = {
    en: {
        nav: {
            home: "Home",
            blog: "Blog",
            projects: "Projects",
            about: "About",
        },
        common: {
            back: "Back",
            backendDeveloper: "Backend developer",
            footerText: "Developer portfolio by Åsmund Danielsen Kvitvang",
        },
        about: {
            contactIntro: "If you are in need of developer(s) for your project(s), do not hesitate to contact me, either on",
            contactOutro: "or via e-mail, and we will see if it is a match!",
            workDescription: "I am currently working as a backend developer in a consultant firm called Anomalab, located in Oslo, Norway.",
            educationDescription: "I have a masters degree in computation science, with high focus on applied mathematics, from the University of Oslo. The thesis I wrote was about how to approximation solutions to a specific class of partial differential equations by using machine learning models as a tool.",
            skillsDescription: "I am fond of collaboration in teams, as well as independent work whenever necessary. The combination of experiences within applied mathematics and informatics has made me passionate about robust code with great focus on high efficiency. In my studies, I have become well acquainted with high-level languages such as Python, C/C++, Java etc. through the development of machine learning models. Through my work as a backend developer I have acquired a strong understanding of building databases and APIs, where I have primarily used the languages Java/Kotlin and Javascript/Typescript, and I have become well acquainted with tools and frameworks such as NodeJS, NextJS, GraphQL, PostgreSQL, Spring Boot, Knex, Prisma and Swagger.",
        },
    },
    no: {
        nav: {
            home: "Hjem",
            blog: "Blogg",
            projects: "Prosjekter",
            about: "Om meg",
        },
        common: {
            back: "Tilbake",
            backendDeveloper: "Backend-utvikler",
            footerText: "Utvikler-portefølje av Åsmund Danielsen Kvitvang",
        },
        about: {
            contactIntro: "Hvis du trenger en utvikler til ditt prosjekt, ikke nøl med å kontakte meg, enten på",
            contactOutro: "eller via e-post, så ser vi om det er en match!",
            workDescription: "Jeg jobber for tiden som backend-utvikler i konsulentfirmaet Anomalab, som ligger i Oslo, Norge.",
            educationDescription: "Jeg har en mastergrad i beregningsvitenskap, med stort fokus på anvendt matematikk, fra Universitetet i Oslo. Oppgaven jeg skrev handlet om hvordan man kan tilnærme løsninger til en spesifikk klasse av partielle differensialligninger ved å bruke maskinlæringsmodeller som verktøy.",
            skillsDescription: "Jeg setter pris på samarbeid i team, samt selvstendig arbeid når det er nødvendig. Kombinasjonen av erfaringer innen anvendt matematikk og informatikk har gjort meg lidenskapelig opptatt av robust kode med stort fokus på høy effektivitet. I studiene mine har jeg blitt godt kjent med høynivåspråk som Python, C/C++, Java osv. gjennom utvikling av maskinlæringsmodeller. Gjennom arbeidet mitt som backend-utvikler har jeg fått en god forståelse av å bygge databaser og API-er, der jeg hovedsakelig har brukt språkene Java/Kotlin og Javascript/Typescript, og jeg har blitt godt kjent med verktøy og rammeverk som NodeJS, NextJS, GraphQL, PostgreSQL, Spring Boot, Knex, Prisma og Swagger.",
        },
    },
};

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("language") as Language | null;
        if (stored) {
            setLanguage(stored);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("language", language);
            document.documentElement.lang = language;
        }
    }, [language, mounted]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "no" : "en"));
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        return { language: "en" as const, toggleLanguage: () => {}, t: translations.en };
    }
    return context;
}
