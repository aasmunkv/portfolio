// utilities/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getMarkdownPosts = () => {
    const postsDirectory = path.join(process.cwd(), 'content', 'blog');
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName: string) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        return {
            slug: fileName.replace(/\.md$/, ''),
            frontmatter: data,
            content,
        };
    });

    return posts;
};

export default getMarkdownPosts;
