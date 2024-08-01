import React from "react";
import type { Project } from "../data/projects";

export function ProjectCard(project) {
    project = project.project
    return (
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 z-10">
            <figure>
                <img
                src={project.image}
                alt="project-image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {project.name}
                <div className="badge badge-secondary">{project.badge}</div>
                </h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    {project.tags.map((tag) => {
                        return <div className="badge badge-outline" key={tag}>{tag}</div>
                    })}
                </div>
            </div>
        </div>
    )
}