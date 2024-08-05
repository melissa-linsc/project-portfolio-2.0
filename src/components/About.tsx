import React from "react"
import { skills } from "../data/skills"

export function About() {
    return (
        <section className="flex items-center my-48">
            <div className="glow-text font-extrabold absolute text-[8rem] m-0 p-0 -left-10 md:text-[11rem]">
                <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text vertical-text -z-10">ABOUT</h1>
            </div>
            <div className="bg-slate-800 rounded-xl h-[max-content] relative z-10 mx-5 md:mx-16 p-10 md:ml-36 ml-24">
                <div>
                    <p>Hi, I’m Melissa, a passionate Full-Stack Developer with a strong attention for detail and design, and a drive for continuously learning and improving. I enjoy solving complex problems, creating innovative solutions and designing beautiful modern UI.</p>
                        <br></br>
                        <p className="hidden lg:block">
                        My journey in coding began during my time at university, where I studied Physics and Chemistry, using python to analyse data. From there, I began to explore coding further and discovered a strong passion for software development. Initially self-taught, I decided to take the leap into a career in tech and enrolled in the 13 week Northcoders Software Engineering bootcamp, which provided me with a solid foundation. Since then, I have been working as a Junior Software Engineer at Touchbyte, where I have been able to further develop my skills and knowledge in a professional environment.</p>
                        <br></br>
                        <p>
                        With proficiency in a range of programming languages and frameworks, I bring a versatile approach to software development. When I'm not coding, you'll find me gaming, reading or crocheting!</p>
                        <br></br>
                        <p>
                        I am excited to connect with like-minded people and take on new challenges!</p>
                </div>
                <div>
                    <ul className="flex flex-wrap justify-around">
                        {skills.map((skill, index) => (
                            <li key={index} className="md:text-lg text-sm font-bold flex my-4">
                                <div className="h-[2rem] w-[2rem]">
                                    <img src={skill.image} alt={skill.name} className="rounded-full object-cover"/>
                                </div>
                                <div>
                                    <h2 className="ml-2">{skill.name}</h2>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}