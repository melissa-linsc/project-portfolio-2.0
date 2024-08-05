import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Landing() {
    return ( <>
        <div className="hero min-h-screen bg-base-100 flex flex-col items-center justify-center">
            <div className="text-center hero-content flex flex-col max-w-2xl p-10">
                <div className="avatar">
                    <div className="w-[13rem] rounded-full bg-secondary mb-2">
                        <img className="mt-2" src="src/assets/Melissa.PNG" />
                    </div>
                </div>
                    <h1 className="mb-5 text-7xl font-bold animate-fadeIn">
                        Hi! I&apos;m &nbsp;
                        <span className="relative glow-text">
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Melissa</span>
                        </span>
                    </h1>
                    <div className="flex justify-center pb-5">
                        <h1 className="relative sm:text-5xl text-3xl font-bold
                            before:absolute before:inset-0 before:animate-typewriter
                            before:bg-base-100
                            after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
                            after:bg-white">A Full-Stack Developer</h1>
                    </div>
                    <p className="mb-5">
                    I am a passionate Full-Stack Developer with a strong attention to detail and design, with a love for learning, always striving to improve.
                    Let's connect!
                    </p>
                    <div className="flex flex-row justify-center">
                        <FaLinkedin className="w-12 h-12 text-secondary mx-2 hover:scale-125 hover:cursor-pointer"/>
                        <FaGithub className="w-12 h-12 text-secondary mx-2 hover:scale-125 hover:cursor-pointer"/>
                        <MdEmail className="w-12 h-12 text-secondary mx-2 hover:scale-125 hover:cursor-pointer"/>
                    </div>
            </div>
            <span className=" animate-bounce rounded-full p-4 bg-primary text-white text-sm mt-5">
                <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </span>
        </div>
        </>
    )
}