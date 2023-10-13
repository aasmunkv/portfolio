import fs from "fs";
import matter from "gray-matter";
import {ProjectData} from "@/components/projects/ProjectData";

const getProjectData = (): ProjectData[] => {
    const folder = "posts/projects/"
    const files = fs.readdirSync(folder);
    const mdPosts = files.filter((file) => file.endsWith(".md"));

    const posts = mdPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${folder}${filename}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            filename: filename,
            employer: matterResult.data.employer,
            division: matterResult.data.division,
            timespan: matterResult.data.timespan,
            title: matterResult.data.title,
            role: matterResult.data.role,
            description: matterResult.data.description,
        }
    });
    posts.sort((a, b) => b.filename.localeCompare(a.filename));
    return posts;
}


export default getProjectData;