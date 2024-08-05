import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
    return (
        <>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About Me</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Experience</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FaLinkedin className="w-10 h-10 text-secondary mx-1 hover:scale-105 hover:cursor-pointer"/>
                    <FaGithub className="w-10 h-10 text-secondary mx-1 hover:scale-105 hover:cursor-pointer"/>
                    <MdEmail className="w-10 h-10 text-secondary mx-1 hover:scale-125 hover:cursor-pointer"/>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Melissa Lin</p>
            </aside>
        </footer>
        </>
    )
}