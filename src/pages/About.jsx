import Navbar from "../components/Navbar.jsx";
import OurStory from "../components/About/OurStory.jsx";
import WhatWeBelieve from "../components/About/WhatWeBelieve.jsx";
import OurJourney from "../components/About/OurJourney.jsx";
import MissionVision from "../components/About/MissionVision.jsx";
import OurStudio from "../components/About/OurStudio.jsx";
import TheTeam from "../components/About/TheTeam.jsx";
import Explore from "../components/About/Explore.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
    return (
        <>
            <Navbar />
            <OurStory />
            <WhatWeBelieve />
            <OurJourney />
            <MissionVision />
            <OurStudio />
            <TheTeam />
            <Explore />
            <Footer />
        </>
    );
}