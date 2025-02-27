import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectGallery() {
    return (
        <section className='mb-[6rem] text-center lg:text-left p-0'>
        <div className="relative glow-text text-6xl font-extrabold my-20 lg:text-[11rem] lg:my-0 z-[-1] lg:top-11 lg:left-12 sm:text-[7rem] sm:my-0 sm:top-5 sm:right-1">
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">PROJECTS</h1>
        </div>
        <div className="flex justify-center">
             <div className="carousel carousel-center bg-neutral max-w-vw rounded-box space-x-4 p-4">
            {projects.map((project) => { 
                return (
                    <div className="carousel-item" key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                );
            })}
            </div>
        </div>
        </section>
    )
}