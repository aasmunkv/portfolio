// import ComingSoon from "@/components/coming-soon";
// import NavigationButtons from "@/components/navigation";
// import HomeNavigation from "@/components/home-navigation";
// import fs from "fs";
// import Link from "next/link";
// import matter from "gray-matter";
// import {PostMetadata} from "@/components/PostMetadata";
import getPostMetadata from "@/components/blog/getPostMetadata";
// import Image from "next/image";
import PostPreview from "@/components/blog/PostPreview";


export default function BlogPage() {
    const postMetadata = getPostMetadata("en");
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return (
        <main className="max-w-2xl">
            {/*<div className="flex flex-col gap-24 mt-16 items-center min-h-screen">*/}
            <div className="flex flex-col items-center">
                <ul className="grid grid-cols-1 gap-4">
                    {postPreviews}
                </ul>
            </div>
        </main>
        // <main className="flex min-h-screen flex-col items-center justify-between p-24">
        //     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        //         <HomeNavigation path="" />
        //         <NavigationButtons path={"/blog"} />
        //     </div>
        //     <div className="flex flex-col gap-24 mt-16 items-center min-h-screen">
        //         <ul className="grid grid-cols-1 gap-4">
        //             {postPreviews}
        //         </ul>
        //     </div>
        //     {/*<div className="mt-16 text-center flex items-center flex flex-col min-h-screen">*/}
        //     {/*    {postPreviews}*/}
        //     {/*</div>*/}
        //
        // </main>
);
}
