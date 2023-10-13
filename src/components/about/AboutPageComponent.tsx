import React from "react";
import Image from "next/image";

export default function AboutPageComponent() {
    return (
        <div className="flex flex-col min-h-screen">
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
                    <p className="text-md text-gray-600">Backend developer</p>
                    <p className="text-md text-gray-600">aakvitvang@gmail.com</p>
                </div>
            </div>
            <div className="items-left text-lg">
                <p className="font-semibold mb-6">
                    If you are in need of developer(s) for your project(s), do not hesitate to contact me, either
                    on <a href={"https://www.linkedin.com/in/%C3%A5smund-danielsen-kvitvang-125012180"} className="hover:underline">
                        LinkedIn
                    </a> or via e-mail, I we will see if it is a match!
                </p>
                <div className="[&>*]:mb-2">
                    <p>
                        I am currently working as a backend developer in a consultant firm called Omegapoint Norway, located
                        in Oslo, Norway.
                    </p>
                    <p>
                        I have a masters degree in computation science, with high focus on applied mathematics, from the
                        University of Oslo. The thesis I wrote was about how to approximation solutions to a specific class
                        of partial differential equations by using machine learning models as a tool.
                    </p>
                    <p>
                        I am fond of collaboration in teams, as well as independent work whenever necessary. The combination
                        of experiences within applied mathematics and informatics has made me passionate about robust code
                        with a focus on high efficiency. In my studies, I have become well acquainted with high-level
                        languages such as Python, C/C++, Java etc. through the development of machine learning models.
                        Through my work as a backend developer I have acquired a strong understanding of building databases
                        and APIs, where I have primarily used the languages Java/Kotlin and Javascript/Typescript, and I
                        have become well acquainted with tools/frameworks such as NodeJS, NextJS, GraphQL, PostgreSQL,
                        Spring Boot, Knex, Prisma and Swagger.
                    </p>
                </div>
            </div>
        </div>
    );
}