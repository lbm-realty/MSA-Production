import "../css/faqContainer.css";
import question1 from "../images/Question1.png";
import question2 from "../images/Question2.png";
import question3 from "../images/Question3.png";
import question4 from "../images/Question4.png";
import question5 from "../images/Question5.png";
import question6 from "../images/Question6.png";

function FaqContainer() {
  const faqImages = [question1, question2, question3, question4, question5, question6]

  return (
    <>
      <body>
        <div class="container">
          <div class="wrapper">
            <div class="wrapper-holder">
              {faqImages.map((image, value) => {
                return(
              <img src={image} id={`slider-img-${value+1}`} class="images" alt={image} key={value} />
            )}) }
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default FaqContainer;
