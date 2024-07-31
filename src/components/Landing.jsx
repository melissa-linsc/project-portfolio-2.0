import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Landing() {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="text-center hero-content">
                <div className="max-w-lg p-20">
                <div className="avatar">
                    <div className="w-[13rem] rounded-full bg-secondary mb-10">
                        <img className="mt-2" src="src/assets/Melissa.PNG" />
                    </div>
                </div>
                    <h1 className="mb-5 text-5xl font-bold">
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
        </div>
    )
}