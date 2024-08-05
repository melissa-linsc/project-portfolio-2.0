import { ExperienceGallery } from "../components/ExperienceGallery";
import ImageGallery from "../components/ImageGallery";
import { Landing } from "../components/Landing";
import { NavBar } from "../components/NavBar";
import { ProjectGallery } from "../components/ProjectGallery";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export function Home() {

    return (
        <>
            <NavBar />
            <Landing />
            <ImageGallery />
            <About />
            <ProjectGallery />
            <ExperienceGallery />
            <Footer />
        </>
    )
}