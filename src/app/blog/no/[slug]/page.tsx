import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/blog/getPostMetadata";
import BackToBlog from "@/components/blog/BackToBlog";

const getPostContent = (slug: string) => {
    const folder = "posts/blog/no/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return matter(content);
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
    const posts = getPostMetadata("no");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params; // <-- unwrap the Promise
    const slug = resolvedParams.slug;
    const post = getPostContent(slug);
    return (
        <main>
            <div className="max-w-2xl w-full">
                <div className="flex items-start my-4">
                    <BackToBlog/>
                </div>
                <div className="flex justify-center min-h-screen">
                    <article className="prose lg:prose-xl">
                        <h2 className="dark:text-gray-200">{post.data.title}</h2>
                        <h4 className="dark:text-gray-300">{post.data.subtitle}</h4>
                        <h6 className="text-sm dark:text-gray-400">{post.data.author}</h6>
                        <h6 className="text-sm dark:text-gray-400">{post.data.date}</h6>
                        <Markdown className="dark:text-gray-300">{post.content}</Markdown>
                    </article>
                </div>
                <div className="flex items-start my-4">
                    <BackToBlog/>
                </div>
            </div>
        </main>
    );
}