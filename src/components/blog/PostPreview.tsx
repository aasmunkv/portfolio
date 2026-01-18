"use client";

import Link from "next/link";
import Image from "next/image";
import {PostMetadata} from "@/components/blog/PostMetadata";
import { useLanguage } from "@/context/LanguageProvider";

export default function PostPreview(props: PostMetadata) {
    const { language } = useLanguage();
    return (
        <Link key={props.slug} href={`/blog/${language}/${props.slug}`}>
            {/*<div className="md:flex md:[&>*]:hover:-translate-y-3 md:[&>*]:hover:translate-x-3 md:[&>*]:hover:transition-transform md:[&>*]:hover:duration-400">*/}
            <div className="md:flex md:[&>*]:hover:-translate-x-3 md:[&>*]:hover:transition-transform md:[&>*]:hover:duration-400">
                <div className="w-full border border-slate-200 p-4 rounded-md shadow-md md:flex">
                    <div className="md:mr-4 md:w-24 md:h-24">
                        <Image className="object-cover w-full md:w-24 md:h-24" src={`/blog-images/${props.image}`} alt="Topic photo" width={180} height={180} priority/>
                    </div>
                    <div className="md:flex-1">
                        <p className="font-bold hover:underline">{props.title}</p>
                        <p className="text-sm text-slate-400 dark:text-white dark:text-slate-500">{props.date} | {props.author}</p>
                        <p className="text-slate-700 dark:text-white dark:text-slate-200">{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}