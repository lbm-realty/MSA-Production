import '../css/quote.css';
import quotes from '../images/quotation.png'

function Quote() {
  return (
    <>
      <div class="quote">
        <img src={quotes} class="quotation" />
        <div class="text">CULTIVATE COMMUNITY, IGNITE IMAN</div>
        <div class="footer">
          <div class="dash"></div>
          <div class="mo-name">Mohamad Altabaa</div>
        </div>
      </div>

      <div class="black-box-2"></div>
    </>
  );
}

export default Quote;