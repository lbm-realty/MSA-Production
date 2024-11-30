import "../css/aboutContainer.css"
import logo from '../images/msa-logo.png'

const AboutContainer = () => {
    return (
        <div className="about">
        <img src={logo} className="about-logo" alt="MSA-logo" />
        <div className="about-container">
            <div className="about-header">About</div>
            <div className="about-text">
            This website is designed to help <br />
            incoming freshmen and Tech students <br />
            learn about the MSA and connect <br />
            with the Muslim community at Tech.
            </div>
            </div>
      </div>
    )
}

export default AboutContainer;