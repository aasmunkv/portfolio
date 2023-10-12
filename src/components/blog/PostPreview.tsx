// import getPostMetadata from "@/components/getPostMetadata";
// import HomeNavigation from "@/components/home-navigation";
// import NavigationButtons from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";
import {PostMetadata} from "@/components/blog/PostMetadata";

export default function PostPreview(props: PostMetadata) {
    return (
        <Link key={props.slug} href={`/blog/${props.slug}`}>
            <div className="md:flex md:[&>*]:hover:-translate-y-3 md:[&>*]:hover:translate-x-3">
                <div className="w-full border border-slate-200 p-4 rounded-md shadow-md md:flex">
                    <div className="md:mr-4 md:w-24 md:h-24">
                        <Image className="object-cover w-full md:w-24 md:h-24" src={`/blog-images/${props.image}`} alt="Topic photo" width={180} height={180} priority/>
                    </div>
                    <div className="md:flex-1">
                        <p className="font-bold hover:underline">{props.title}</p>
                        <p className="text-sm text-slate-400">{props.date} | {props.author}</p>
                        <p className="text-slate-700">{props.subtitle}</p>
                    </div>
                    {/*<h6 className="text-sm text-slate-600">{props.date}</h6>*/}
                </div>
            </div>
        </Link>
    )
}