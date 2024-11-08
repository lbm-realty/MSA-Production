import { useState } from "react";
import "../css/donationContainer.css";
import StripeCheckout from "react-stripe-checkout";

function DonationContainer() {
  const [customAmount, setCustomAmount] = useState(0);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [subscribe25, setSubscribe25] = useState(false);
  const [subscribe50, setSubscribe50] = useState(false);
  const [subscribe100, setSubscribe100] = useState(false);
  const product = {
    name: "",
    price: 0,
  };

  const subscriptionOptions = (amount) => {
    if (amount === 25) {
      setSubscribe25(true);
      setSubscribe50(false);
      setSubscribe100(false);
    } else if (amount === 50) {
      setSubscribe50(true);
      setSubscribe25(false);
      setSubscribe100(false);
    } else {
      setSubscribe100(true);
      setSubscribe25(false);
      setSubscribe50(false);
    }
  };

  const handleSubscription = (amount) => {
    if (amount === 25)
      window.location.href = "https://buy.stripe.com/fZe2bFcFJ4Ye2E86oo";
    else if (amount === 50)
      window.location.href = "https://buy.stripe.com/dR603xaxB9eu4Mg7st";
    else 
      window.location.href = "https://buy.stripe.com/4gwcQj49d1M26Uo002";
  };

  const handleAmount = (amount) => {
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
    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((err) => console.log(err));
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
          <div class="donation-container">
            <div class="donate-section-heading">Support Us</div>
            <div class="donate-section-para">
              Your donation helps us continue our work. Thank you for your
              support!
            </div>
            <div className="with-custom-donations">
              <div id="donation-options" class="donation-options">
                {subscribe25 ? (
                  <div className="subscription-option">
                    <StripeCheckout
                      stripeKey={process.env.REACT_APP_KEY}
                      token={makePayment}
                    >
                      <button onClick={() => {handleAmount(25)}} className="oneTime">One Time</button>
                    </StripeCheckout>

                    <button onClick={() => {handleSubscription(25)}} className="monthly">
                      Monthly
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      subscriptionOptions(25);
                    }}
                    data-amount="25"
                    className="donation-button-1"
                  >
                    Donate $25
                  </button>
                )}
                {subscribe50 ? (
                  <div className="subscription-option">
                    <StripeCheckout
                      stripeKey={process.env.REACT_APP_KEY}
                      token={makePayment}
                    >
                      <button onClick={() => {handleAmount(50)}} className="oneTime">One Time</button>
                    </StripeCheckout>{" "}
                    <button onClick={() => {handleSubscription(50)}} className="monthly">Monthly</button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      subscriptionOptions(50);
                    }}
                    data-amount="50"
                    className="donation-button-2"
                  >
                    Donate $50
                  </button>
                )}
                {subscribe100 ? (
                  <div className="subscription-option">
                    <StripeCheckout
                      stripeKey={process.env.REACT_APP_KEY}
                      token={makePayment}
                    >
                      <button onClick={() => {handleAmount(100)}} className="oneTime">One Time</button>
                    </StripeCheckout>
                    <button onClick={() => {handleSubscription(100)}} className="monthly">
                      Monthly
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      subscriptionOptions(100);
                    }}
                    data-amount="100"
                    className="donation-button-3"
                  >
                    Donate $100
                  </button>
                )}
              </div>
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
              {showCustomInput && (
                <div id="custom-donation">
                  {showButton && (
                    <>
                      <input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter Amount in USD"
                        value={customAmount || ""}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />
                      <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY}
                        token={makePayment}
                      >
                        <button
                          id="custom-donate-button"
                          onClick={handleCustomDonate}
                        >
                          Confirm Amount
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
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default DonationContainer;
