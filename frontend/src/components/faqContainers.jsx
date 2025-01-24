import { useState } from "react";
import "../css/faqContainer.css";

// import question1 from "../images/Question1.png";
// import question2 from "../images/Question2.png";
// import question3 from "../images/Question3.png";
// import question4 from "../images/Question4.png";
// import question5 from "../images/Question5.png";
// import question6 from "../images/Question6.png";

function FaqContainer() {
  // const faqImages = [question1, question2, question3, question4, question5, question6]
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
  const questions = [
    "I have an urgent question that needs to be solved",
    "Can non-Muslim students also join the MSA?",
    "What kind of events does MSA organize?",
    "Is the MSA only focused on religious activities?",
    "How does the MSA contribute to campus life?",
    "How can I learn more about the MSA",
  ];
  const answers = [
    "You can join our Discord server and post a message mentioning the admin (@admin) and get it sorted. ",
    "Absolutely! MSA welcomes students of all backgrounds to join and participate in its events and activities. The organization’s goal is to promote mutual understanding and unity among students, regardless of their faith. ",
    "MSA organizes various events, including educational workshops, community service projects, cultural celebrations, and more. These events are designed to provide a comprehensive understanding of Islam, its values, and its contributions to society. ",
    "While MSA does promote religious awareness, it also emphasizes cultural celebrations, community service, and building connections among students. It’s a well-rounded organization that encourages personal development, community engagement, and cross-cultural understanding.",
    "MSA contributes by promoting diversity, fostering understanding, and creating a sense of belonging for Muslim students. It also plays a role in interfaith initiatives, spreading awareness about Islam, and participating in community service projects that benefit the campus and local community",
    "We have more information on our Discord and social media pages at the bottom. The link for the Discord is on the main page. ",
  ];

  return (
    <>
      <div class="container">
        <div class="wrapper">
          <div class="wrapper-holder">
            <h3 className="main-header">FAQS</h3>
            <div  className="line-and-general">
            <div className="line-l"></div>
              <h4 className="general">General Information</h4>
            <div className="line-r"></div>
            </div>
            <div className="question-answer">
            {questions.map((question, index) => (
              <div className="qa-inner">
                <div className="question">
                  <div className="text">{question}</div>
                  <button className="open-close-btn" onClick={() => handleClick(index)}>
                    {isOpen === index ? "-" : "+"}
                  </button>
                </div>
                <div
                  className={`answer ${
                    isOpen === index ? "answer-open" : "answer-close"
                  }`}
                >
                  {answers[index]}
                  </div>
                <div className={`line-${isOpen === index ? 'show' : 'hide'}`}></div>
                </div>
            ))}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqContainer;
