import "../css/faqContainer.css";
import question1 from "../images/Question1.png";
import question2 from "../images/Question2.png";
import question3 from "../images/Question3.png";
import question4 from "../images/Question4.png";
import question5 from "../images/Question5.png";
import question6 from "../images/Question6.png";

function FaqContainer() {
  return (
    <>
      <body>
        <div class="container">
          <div class="wrapper">
            <div class="wrapper-holder">
              <img src={question1} id="slider-img-1" class="images" />
              <img src={question2} id="slider-img-2" class="images" />
              <img src={question3} id="slider-img-3" class="images" />
              <img src={question4} id="slider-img-4" class="images" />
              <img src={question5} id="slider-img-5" class="images" />
              <img src={question6} id="slider-img-6" class="images" />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default FaqContainer;
