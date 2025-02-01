import "../css/prayerDisplay.css";

const PrayerDisplay = (props) => {
  const prayers = ["Fajr -", "Sunrise -","Dhuhr -", "Asr -", "Maghreb -", "Isha -"];

  return (
    <>
      {Array.isArray(props.data) ? (
        props.data.length > 0 ? (
          <div className="prayer-outer">
            <div className="prayer-header-rest">
              <h2 className="prayer-heading">Prayer Hours</h2>
              <div className="prayer-inner">
              {props.data.map((prayer, index) => (
                  <div className="name-hours">
                    <p id="prayer-name">{prayers[index]}</p>
                    <p id="space-div"></p>
                    <div id="prayer-time">{prayer}</div>
                  </div>
              ))}
                </div>
                </div>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default PrayerDisplay;
