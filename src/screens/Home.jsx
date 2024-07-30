import ImageGallery from "../components/ImageGallery";
import { Landing } from "../components/Landing";
import { NavBar } from "../components/NavBar";
import { ScrollingLogos } from "../components/ScrollingLogos";

export function Home() {

    return (
        <>
            <NavBar />
            <Landing />
            <ImageGallery />
        </>
    )
}