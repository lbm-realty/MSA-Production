import { useState } from "react";
import "../css/prayerApi.css";
import Logout from "../components/logout";

const PrayerAPI = () => {
  const token = localStorage.getItem("accessToken");

  const prayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghreb", "Isha"];
  const [prayerTimes, setPrayerTimes] = useState(["", "", "", "", ""]);
  const [fromDates, setFromDates] = useState("");
  const [toDates, setToDates] = useState("");
  const [sendData, setSendData] = useState({
    prayerTime: [],
    fromDate: "",
    toDate: "",
  });

  const handlePrayerTimes = (e, index) => {
    const newPrayerTimes = [...prayerTimes];
    newPrayerTimes[index] = e.target.value;
    setPrayerTimes(newPrayerTimes);
  };
  const handleFromDates = (e) => {
    setFromDates(e.target.value);
  };
  const handleToDates = (e) => {
    setToDates(e.target.value);
    setSendData({
      ...sendData,
      prayerHours: [...prayerTimes],
      from: new Date(fromDates),
      to: new Date(toDates)
    });
  };
  const saveInfo = async () => {
    setSendData({
      ...sendData,
      prayerTime: [...prayerTimes],
      fromDate: new Date(fromDates),
      toDate: new Date(toDates)
    });
  }
  const createPrayerTime = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_PRODUCTION}/addPrayerTime`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sendData),
      });
      const value = await response.json();
      if (response.ok) alert(value.message);
      else alert(value.message);
    } catch (err) {
      alert(`An error occured: ${err}`);
    }
  };

  return token ? (
    <div className="prayers-form" onSubmit={createPrayerTime}>
      <div className="prayers-logout">
      <Logout />
      </div>
      <h3>Create new prayer times</h3>
      <h3>Make Sure to include am/pm after each prayer time too</h3>
      <div className="prayers-inner">
        <div className="prayer">
          {prayers.map((prayer, index) => (
            <>
              <label htmlFor=""> Prayer Time ({prayers[index]})</label>
              <input
                type="text"
                name="prayerTime"
                onChange={(e) => handlePrayerTimes(e, index)}
                // onBlur={handlePrayerChange}
              />
            </>
          ))}
        </div>
        <div className="from-to">
        <label htmlFor="">From (Date)</label>
        <input
          type="text"
          name="fromDate"
          onChange={handleFromDates}
          // onBlur={handlePrayerChange}
        />
        <label htmlFor="">To (Date)</label>
        <input
          type="text"
          name="toDate"
          onChange={handleToDates}
          // onBlur={handlePrayerChange}
        />
        </div>
        </div>
        *ALWAYS FIRST SAVE AND THEN SUBMIT, DON'T SUBMIT DIRECTLY*
        <button className="prayer-api-btn" onClick={saveInfo}>
        SAVE
      </button>
      <button className="prayer-api-btn" onClick={createPrayerTime}>
        SUBMIT
      </button>
    </div>
        ) : (
          <div className="events-outer-forbid">
            <div className="text-container">
              <h1>For Admin Use Only</h1>
              <h3>
                You're not authorized to access this page. Please login if you're an
                admin/officer. You may leave otherwise.
              </h3>
              <button
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Go to Login
              </button>
            </div>
          </div>
        );
};

export default PrayerAPI;
