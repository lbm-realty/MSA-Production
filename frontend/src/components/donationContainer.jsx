import { useState } from "react";
import "../css/donationContainer.css";
import StripeCheckout from "react-stripe-checkout";
import DonationDesc from "./donationDesc";

function DonationContainer() {
  const [customAmount, setCustomAmount] = useState(0);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [subscribe25, setSubscribe25] = useState(false);
  const [subscribe50, setSubscribe50] = useState(false);
  const [subscribe100, setSubscribe100] = useState(false);
  const [oneTime, setOneTime] = useState(false);
  const [subMonthly, setSubMonthly] = useState(false);
  const product = {
    name: "",
    price: 0,
  };

  // const subscriptionOptions = (amount) => {
  //   if (amount === 25) {
  //     setSubscribe25(true);
  //     setSubscribe50(false);
  //     setSubscribe100(false);
  //   } else if (amount === 50) {
  //     setSubscribe50(true);
  //     setSubscribe25(false);
  //     setSubscribe100(false);
  //   } else {
  //     setSubscribe100(true);
  //     setSubscribe25(false);
  //     setSubscribe50(false);
  //   }
  // };

  const handleSubscription = (amount) => {
    if (amount === 25)
      window.location.href = "https://buy.stripe.com/fZe2bFcFJ4Ye2E86oo";
    else if (amount === 50)
      window.location.href = "https://buy.stripe.com/dR603xaxB9eu4Mg7st";
    else window.location.href = "https://buy.stripe.com/4gwcQj49d1M26Uo002";
  };

  const handleAmount = (amount) => {
    if (amount < 0.5) {
      alert("Error: The amount entered was too small, please try again.");
    }
    product.name = `Purchase of ${amount} was made`;
    product.price = amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    console.log(`This is the headers: ${headers}`);
    return fetch(`https://msa-production.onrender.com/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE: ", response);
        const { status } = response;
        console.log("STATUS: ", status);
      })
      .catch((err) => console.log("The error is: ", err));
  };

  const handleCustomDonate = () => {
    if (customAmount) {
      product.name = `Purchase of ${customAmount} was made`;
      product.price = customAmount;
      setShowCustomInput(false);
    }
  };

  return (
    <>
      <body>
        <div class="donate-section">
          <DonationDesc />
          <div class="donation-container">
            <div class="donate-section-heading">Donate Here</div>
            <div class="donate-section-para">
              Your donation helps us continue our work. Choose the amount that works best for you!
            </div>
            <div className="one-time-monthly">
              <button
                onClick={() => {
                  setOneTime(!oneTime);
                  setSubMonthly(false);
                }}
                className={oneTime ? "oneTime-true" : "oneTime"}
              >
                One time
              </button>
              <button
                onClick={() => {
                  setSubMonthly(!subMonthly);
                  setOneTime(false);
                }}
                className={subMonthly ? "monthly-true" : "monthly"}
              >
                Monthly
              </button>
            </div>
            <div className="donation-options">
              {/* <div id="donation-options" class="donation-options"> */}
                <div className="subscription-option">
                  {oneTime ? 
                    <StripeCheckout
                      stripeKey={process.env.REACT_APP_KEY}
                      token={makePayment}
                    >
                      <button
                        onClick={() => {
                          handleAmount(25);
                        }}
                        data-amount="25"
                        className="donation-button-1"
                      >
                        Donate $25
                      </button>
                    </StripeCheckout>
                   : 
                    <button
                      onClick={() => {
                        subMonthly ? handleSubscription(25) : console.log("No action")
                      }}
                      data-amount="25"
                      className="donation-button-1"
                    >
                      Donate $25
                    </button>
                  }
                </div>
                <div className="subscription-option">
                  {oneTime ? 
                    <StripeCheckout
                    stripeKey={process.env.REACT_APP_KEY}
                    token={makePayment}
                  >
                    <button
                      onClick={() => {
                        handleAmount(50);
                      }}
                      data-amount="50"
                      className="donation-button-2"
                    >
                      Donate $50
                    </button>
                  </StripeCheckout> 
                   :
                    <button
                    onClick={() => {
                      subMonthly ? handleSubscription(50) : console.log("No action");
                    }}
                    data-amount="50"
                    className="donation-button-2"
                  >
                    Donate $50
                  </button>
                }
                </div>
                <div className="subscription-option">
                  {oneTime ?  
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_KEY}
                    token={makePayment}
                  >
                    <button
                      onClick={() => {
                        handleAmount(100);
                      }}
                      data-amount="100"
                      className="donation-button-3"
                    >
                      Donate $100
                    </button>
                  </StripeCheckout>
                   :
                    <button
                    onClick={() => {
                      subMonthly ? handleSubscription(100) : console.log("No action");
                    }}
                    data-amount="100"
                    className="donation-button-3"
                  >
                    Donate $100
                  </button>
                }
                </div>
              {/* </div> */}
              <div className="subscription-option">
              <button
                data-amount="custom"
                id="donation-button-custom"
                className="donation-button-custom"
                onClick={() => {
                  setSubscribe100(false);
                  setSubscribe25(false);
                  setSubscribe50(false);
                  setShowCustomInput(true);
                  setShowButton(true);
                }}
              >
                Custom Amount
              </button>
              </div>
            </div>  
              {showCustomInput && (
                <div id="custom-donation-inputs">
                  {showButton && (
                    <>
                      <input
                        id="custom-amount"
                        type="number"
                        className="input-box"
                        placeholder="Enter Amount in USD"
                        value={customAmount || ""}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />

                        <div className="confirm-cancel">
                        <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY}
                        token={makePayment}
                      >
                        <button
                          id="confirm-amount"
                          onClick={handleCustomDonate}
                        >
                          Confirm
                        </button>
                      </StripeCheckout>
                      <button
                        className="cancel-button"
                        onClick={() => {
                          setShowButton(false);
                          setShowCustomInput(false);
                        }}
                      >
                        Cancel
                      </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            
          </div>
        </div>
      </body>
    </>
  );
}

export default DonationContainer;
