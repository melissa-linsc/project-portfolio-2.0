import ImageGallery from "../components/ImageGallery";
import { Landing } from "../components/Landing";
import { NavBar } from "../components/NavBar";
import { ProjectGallery } from "../components/ProjectGallery";

export function Home() {

    return (
        <>
            <NavBar />
            <Landing />
            <ImageGallery />
            <ProjectGallery />
        </>
    )
}