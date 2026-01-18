import {PostMetadata} from "@/components/blog/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (lang: "en" | "no"): PostMetadata[] => {
    const folder = `posts/blog/${lang}/`;
    const files = fs.readdirSync(folder);
    const mdPosts = files.filter((file) => file.endsWith(".md"));

    const posts = mdPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${folder}${filename}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            subtitle: matterResult.data.subtitle,
            date: matterResult.data.date,
            author: matterResult.data.author,
            image: matterResult.data.image,
            slug: filename.replace(".md", ""),
        }
    });

    const currentDate = new Date();
    const filteredPosts = posts.filter((post) => {
        const postDate = new Date(post.date);
        return postDate <= currentDate;
    });

    filteredPosts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    return filteredPosts;


    // const slugs = mdPosts.map((file) => file.replace(".md", ""));
    // return slugs;
}

export default getPostMetadata;