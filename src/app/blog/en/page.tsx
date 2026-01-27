import getPostMetadata from "@/components/blog/getPostMetadata";
import PostPreview from "@/components/blog/PostPreview";

export default function BlogPage() {
    const postMetadata = getPostMetadata("en");
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return (
        <main className="max-w-2xl">
            <div className="flex flex-col items-center">
                <ul className="grid grid-cols-1 gap-4">
                    {postPreviews}
                </ul>
            </div>
        </main>
);
}
