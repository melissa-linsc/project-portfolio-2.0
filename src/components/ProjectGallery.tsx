import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectGallery() {
    return (
        <>
        <div className="relative glow-text text-5xl font-bold">
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">PROJECTS</h1>
        </div>
        <section className="flex justify-center">
             <div className="carousel carousel-center bg-neutral max-w-vw rounded-box space-x-4 p-4">
            {projects.map((project) => { 
                return (
                    <div className="carousel-item" key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                );
            })}
            </div>
        </section>
        </>
    )
}