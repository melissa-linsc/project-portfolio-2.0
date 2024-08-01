import React from "react";
import { EducationTimeline } from "../components/EducationTimeline";
import { education } from "../data/education";
import { workExperience } from "../data/work-experience";
import { WorkTimeline } from "../components/WorkTimeline";

export function ExperienceGallery() {
    return (
        <section className='my-[6rem] text-center lg:text-right'>
            <div className="relative glow-text text-7xl font-extrabold my-20 lg:text-[12rem] lg:my-0 z-[-1] lg:top-16 lg:right-12">
                <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">EXPERIENCE</h1>
            </div>
            <div className="flex lg:flex-row flex-col justify-center mx-10">
                <WorkTimeline timelineData={workExperience}/>
                <EducationTimeline timelineData={education}/>
            </div>
        </section>
    )
}