import ProjectPageComponent from "@/components/projects/ProjectPageComponent";
import React from "react";
import getProjectData from "@/components/projects/getProjectData";

export default function ProjectPage() {
    const projectData = getProjectData("no");
    const projectPreviews = projectData.map((project) => (
        <ProjectPageComponent key={project.timespan} {...project} />
    ));
    return (
        <main className="relative flex flex-col overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col justify-center divide-y divide-slate-200 dark:divide-gray-700">
                    <div className="w-full max-w-3xl mx-auto">
                        {projectPreviews}
                    </div>
                </div>
            </div>
        </main>
    );
}