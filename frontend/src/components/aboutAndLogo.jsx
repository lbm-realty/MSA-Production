import "../css/aboutAndLogo.css";
import logo from "../images/msa-logo.png";

const AboutContainer = () => {
  const openAboutPage = () => {
    window.open("/about");
  };

  return (
    <div className="about-outer">
      <div className="about-inner">
        <img src={logo} className="about-logo" alt="MSA-logo" />
        <div className="about-container">
          <div className="about-header">About</div>
          <div className="about-text">
            Salam Alaikum! Welcome to the Muslim Students Association (MSA) at
            Texas Tech University! Our main goal is to bring people
            together—whether through fun social events, thought-provoking
            discussions, or community service projects.
            <br />
            <button
              onClick={() => {
                openAboutPage();
              }}
              className="read-more-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
