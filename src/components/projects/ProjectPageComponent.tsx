import React from "react";
import {ProjectData} from "@/components/projects/ProjectData";

export default function ProjectPageComponent(props: ProjectData) {
    return (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                {props.title}
            </div>
            <div className="text-sm text-slate-700 mb-2">{props.employer}{props.division.length!==0 ? " (" + props.division + ")" : ""}</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-500">{props.timespan}</time>
                <div className="text-xl  text-slate-900">{props.role}</div>
            </div>
            <div className="text-slate-600">{props.description}</div>
        </div>
    )
}