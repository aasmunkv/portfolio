// import ComingSoon from "@/components/coming-soon";
// import NavigationButtons from "@/components/navigation";
// import HomeNavigation from "@/components/home-navigation";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/blog/getPostMetadata";
import BackToBlog from "@/components/blog/BackToBlog";

const getPostContent = (slug: string) => {
    const folder = "blog-posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

/**
 * A NextJS 'magic' function which ensures that the dynamic [slug] page only accepts the blog endpoints corresponding
 * with the names of the files in the blog-posts folder. This should ensure to yield 404 otherwise, but I do not think
 * this feature is testable withing dev mode ('npm run dev'), so it must be tested when hosting to Vercel (or maybe even
 * better it should be tested by building and hosting locally).
 *
 * If not including this static functionality, the building process generates a so called 'lambda function' which is
 * probably more expensive to host on a clouds server service (such as AWS and Vercel).
 */
export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function AboutPage(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <main>
            {/*<div className="flex items-center flex-col m-4">*/}
            <div className="max-w-2xl w-full">
                <div className="flex items-start my-4">
                    <BackToBlog/>
                </div>
                {/*<div className="mt-36 flex items-center flex flex-col min-h-screen">*/}
                {/*<div className="flex items-center min-h-screen">*/}
                <div className="flex justify-center min-h-screen">
                    {/*<div className="flex items-center justify-center min-h-screen">*/}
                    <article className="prose lg:prose-xl">
                        <h1>{post.data.title}</h1>
                        <h4>{post.data.subtitle}</h4>
                        <h6 className="text-sm text-slate-600">{post.data.author}</h6>
                        <h6 className="text-sm text-slate-400">{post.data.date}</h6>
                        <Markdown>{post.content}</Markdown>
                    </article>
                </div>
                <div className="flex items-start my-4">
                    <BackToBlog/>
                </div>
            </div>
        </main>
        // <main className="flex min-h-screen flex-col items-center justify-between p-6">
        // {/*<main className="flex flex-col items-center justify-between p-2 lg:p-6">*/}
        //     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        //         <HomeNavigation path="/blog/slug" />
        //         <NavigationButtons path={"/blog/slug"} />
        //     </div>
        //     <div className="mt-36 flex items-center flex flex-col min-h-screen">
        //         <article className="prose lg:prose-xl">
        //             <h1>{post.data.title}</h1>
        //             <h6 className="text-sm text-slate-400">{post.data.date}</h6>
        //             <h6 className="text-sm text-slate-800">{post.data.author}</h6>
        //             <Markdown>{post.content}</Markdown>
        //         </article>
        //     </div>
        // </main>
    );
}