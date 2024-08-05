import React from "react";
import { EducationTimeline } from "../components/EducationTimeline";
import { education } from "../data/education";
import { workExperience } from "../data/work-experience";
import { WorkTimeline } from "../components/WorkTimeline";

export function ExperienceGallery() {
    return (
        <section className='mb-[6rem] text-center lg:text-right'>
            <div className="relative text-6xl glow-text font-extrabold my-20 z-[-1] top-10 lg:text-[11rem] lg:my-0 lg:top-16 lg:right-12 sm:text-[7rem] sm:my-0 sm:top-10 sm:right-1">
                <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">EXPERIENCE</h1>
            </div>
            <div className="flex lg:flex-row flex-col justify-center md:mx-10 p-0">
                <WorkTimeline timelineData={workExperience}/>
                <EducationTimeline timelineData={education}/>
            </div>
        </section>
    )
}