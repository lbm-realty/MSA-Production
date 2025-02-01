import PrayerTimesFetch from "../components/prayerTimesFetch";
import AboutContainer from "../components/aboutContainer";
import DirectMessage from "../components/directMessage";
// import PrayerDisplay from "../components/prayerDisplay";
import "../css/aboutContainer.css"

const About = () => {
    return (
        <div className="about-outermost">
        <div className="about-direct">
            <AboutContainer />
            <PrayerTimesFetch />
            {/* <PrayerDisplay /> */}
            <DirectMessage />
        </div>
        </div>
    )
}

export default About;