import React from "react";
import { skills } from "../data/skills";

export function About() {
    return (
        <section className="flex p-10 lg:flex-row">
            <div className="glow-text font-extrabold text-[12rem] my-0 z-[-1] flex flex-wrap m-2">
                <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text vertical-text z-[-1]">ABOUT</h1>
            </div>
            <div className="bg-slate-800 rounded-xl p-10 m-10 max-w-[78%] right-0 h-[35rem] -ml-20">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti accusamus doloribus, harum perspiciatis dicta aut repellat ut aliquam rem quae consequatur odit quasi similique neque velit, cum, dolor laboriosam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae facilis necessitatibus quaerat suscipit nostrum vitae dolorum nobis aspernatur doloremque. Obcaecati repudiandae rerum voluptatibus consequuntur eos? Harum aperiam provident iure nobis.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-10 m-10 max-w-[80%] right-0 h-[35rem] ml-0">
                <p>Through the Northcoders Software Engineering bootcamp, self-study and working as a Junior Software Engineer at Touchbyte, I have learnt a wide variety of skills and tech stacks, with proficiency in the following:</p>
                <ul>
                    {skills.filter((skill) => {
                        return skill.type === "language"
                    }).map((skill, index) => (
                        <li key={index} className="text-lg font-bold text-pink-500 flex my-4">
                            <div className="h-[2rem] w-[2rem]">
                                <img src={skill.image} alt={skill.name} className="rounded-full object-cover"/>
                            </div>
                            <div>
                                <h2 className="ml-2">{skill.name}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="flex">
                    <div className="w-1/2">
                        <h1 className="font-bold text-3xl mb-5">Frontend</h1>
                        <ul>
                        {skills.filter((skill) => {
                            return skill.type === "frontend"
                        }).map((skill, index) => (
                            <li key={index} className="text-lg font-bold text-pink-500 flex my-4">
                                <div className="h-[2rem] w-[2rem]">
                                    <img src={skill.image} alt={skill.name} className="rounded-full object-cover"/>
                                </div>
                                <div className="ml-2">
                                    <h2>{skill.name}</h2>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <h1 className="font-bold text-3xl mb-5">Backend</h1>
                        <ul>
                            {skills.filter((skill) => {
                                return skill.type === "backend"
                            }).map((skill, index) => (
                                <li key={index} className="text-lg font-bold text-pink-500 flex my-4">
                                    <div className="h-[2rem] w-[2rem]">
                                        <img src={skill.image} alt={skill.name} className="rounded-full object-cover"/>
                                    </div>
                                    <div className="ml-2">
                                        <h2>{skill.name}</h2>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}