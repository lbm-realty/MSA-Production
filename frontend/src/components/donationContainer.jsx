import { useState, useEffect } from "react";
import "../css/donationContainer.css";
import StripeCheckout from "react-stripe-checkout";
import DonationDesc from "./donationDesc";

function DonationContainer() {
  const [customAmount, setCustomAmount] = useState(0);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [oneTime, setOneTime] = useState(false);
  const [subMonthly, setSubMonthly] = useState(false);
  const [donationProjects, setDonationProjects] = useState([]);
  const product = {
    name: "",
    price: 0,
  };
  const amounts = [5, 25, 50, 100];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubscription = (amount) => {
    console.log("Suubscription: ", amount);
    if (amount === 5) 
      window.location.href = "https://buy.stripe.com/9AQg2v49d0HYceI4gj";
    else if (amount === 25)
      window.location.href = "https://buy.stripe.com/fZe2bFcFJ4Ye2E86oo";
    else if (amount === 50)
      window.location.href = "https://buy.stripe.com/dR603xaxB9eu4Mg7st";
    else window.location.href = "https://buy.stripe.com/4gwcQj49d1M26Uo002";
  };

  const handleAmount = (amount) => {
    console.log("Individual: ", amount);
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

  const fetchDonationProjects = async () => {
    try {
      const response = await fetch(`https://msa-production.onrender.com/fetch-donation-projects`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const res = await response.json();

      if (response.ok) setDonationProjects(res.message)
      else alert(res.message);

    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    fetchDonationProjects();
  }, [])

  useEffect(() => {
    setDonationProjects(donationProjects);

  }, [donationProjects])

  return (
    <>
      <body>
        <div class={isMobile ? "donate-section-mobile" : "donate-section"}>
          <DonationDesc />
          <div className="bg-red-950/70 p-12 rounded-3xl">
            <div class="donate-section-heading">Donate Here</div>
            <div class="donate-section-para">
              Your donation helps us continue our work. Choose the amount that works best for you!
            </div>
            {/* <div className="all-options"> */}
            <div className="one-time-monthly">
              <div className={oneTime ? "outer-btn-t" : "outer-btn"}>
              <button
                onClick={() => {
                  setOneTime(!oneTime);
                  setSubMonthly(false);
                }}
                className={oneTime ? "oneTime-true" : "oneTime"}
              >
                One time
              </button>
              </div>
              <div className="outer-btn">
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
            </div>
            <div className="donation-options">
              {amounts.map((currAmount) => (
                <div className="subscription-option">
                {oneTime ? 
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_KEY}
                    token={makePayment}
                  >
                    <button
                      onClick={() => {
                        handleAmount(currAmount);
                      }}
                      data-amount={currAmount}
                      className="donation-button-1"
                    >
                      Donate ${currAmount}
                    </button>
                  </StripeCheckout>
                 : 
                  <button
                    onClick={() => {
                      subMonthly ? handleSubscription(currAmount) : console.log("No action")
                    }}
                    data-amount="25"
                    className="donation-button-1"
                  >
                    Donate <br/> ${currAmount}
                  </button>
                }
              </div>
              ))}
              <div className="subscription-option">
              <button
                data-amount="custom"
                id="donation-button-custom"
                className="donation-button-custom"
                onClick={() => {
                  setShowCustomInput(true);
                  setShowButton(true);
                }}
              >
                Custom <br /> Amount
              </button>
              </div>
            {/* </div>   */}
            </div>
              {!subMonthly && oneTime &&
               showCustomInput && (
                <div id="custom-donation-inputs">
                  {showButton && (
                    <>
                      <input
                        id="custom-amount"
                        type="number"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        onKeyDown={(e) => {
                          const invalidChars = ['-', '+', 'e', 'E', '.', 'ArrowUp', 'ArrowDown'];
                          if (invalidChars.includes(e.key)) 
                            e.preventDefault();
                        }}
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
                          className="confirm-amount"
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

          {donationProjects.length > 0 && (
          <div className="flex flex-col gap-8 sm:gap-4 justify-center items-center text-white bg-red-950/70 p-12 rounded-3xl">
            <p className="text-2xl sm:text-4xl mb-2 sm:mb-4 italic font-bold">Feel free to support our projects too!</p>
              <div className="flex flex-col gap-6">
                {donationProjects.map((proj) => (
                  // <StripeCheckout
                  //   stripeKey={process.env.REACT_APP_KEY}
                  //   token={makePayment}
                  // >
                  <div onClick={() => handleAmount(proj.amount)} className="flex flex-col gap-2 text-white rounded-2xl sm:rounded-2xl justify-center items-center border-[1.5px] border-red-400 p-4">
                    <p className="text-xl sm:text-2xl font-bold">{proj.name}</p>
                    {proj.description && (
                      <p className="text-lg sm:text-xl">{proj.description}</p>
                    )}
                    <p className="text-lg sm:text-xl font-bold">Amount needed: ${proj.amount}</p>
                    <div className="h-[1px] w-[50%] bg-white my-4"></div>
                    <div className="flex gap-2 justify-center items-center">
                      <p className="text-lg sm:text-xl text-white">Feel free to pitch in whatever you can</p>
                      <input
                        type="number"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        onKeyDown={(e) => {
                          const invalidChars = ['-', '+', 'e', 'E', '.', 'ArrowUp', 'ArrowDown'];
                          if (invalidChars.includes(e.key)) 
                            e.preventDefault();
                        }}
                        className="bg-transparent border rounded-md px-2 py-1"
                        placeholder="Enter Amount in USD"
                        value={customAmount || ""}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />

                        <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY}
                        token={makePayment}
                      >
                        <button
                          className="bg-transparent border rounded-md px-2 py-1 cursor-pointer hover:bg-red-800/30 duration-300 hover:scale-105"
                          onClick={handleCustomDonate}
                        >
                          Confirm
                        </button>
                      </StripeCheckout>
                  </div>
                </div>
                  // {/* </StripeCheckout> */}
                ))}
              </div>
          </div>
          )}
        </div>
      </body>
    </>
  );
}

export default DonationContainer;
