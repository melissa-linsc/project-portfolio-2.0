import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Landing() {
    return ( <>
        <div className="hero min-h-screen bg-base-100 flex flex-col justify-center">
            <div className="text-center hero-content">
                <div className="p-20 max-w-2xl">
                <div className="avatar">
                    <div className="w-[13rem] rounded-full bg-secondary mb-10">
                        <img className="mt-2" src="src/assets/Melissa.PNG" />
                    </div>
                </div>
                    <h1 className="mb-5 text-7xl font-bold animate-fadeIn">
                        Hi! I&apos;m &nbsp;
                        <span className="relative glow-text">
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Melissa</span>
                        </span>
                    </h1>
                    <p className="mb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, aliquid officia, delectus architecto ea rerum deserunt perferendis debitis amet quisquam fuga quam facere suscipit voluptatum? Quod eos vel quaerat similique.
                    </p>
                    <div className="flex flex-row justify-center">
                        <FaLinkedin className="w-12 h-12 text-secondary mx-2"/>
                        <FaGithub className="w-12 h-12 text-secondary mx-2"/>
                        <MdEmail className="w-12 h-12 text-secondary mx-2"/>
                    </div>
                </div>
            </div>
            <span className=" animate-bounce rounded-full p-4 bg-primary text-white text-sm">
                <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </span>
        </div>
        </>
    )
}