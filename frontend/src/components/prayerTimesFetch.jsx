import PrayerDisplay from "./prayerDisplay";
const { useState, useEffect } = require("react");

const PrayerTimesFetch = () => {
  const [getData, setGetData] = useState([]);

  const currDate = new Date();
  const handleSendData = (value) => {
    value.map((v) => {
      const vto = new Date(v.to);
      const vfrom = new Date(v.from);
      if (currDate >= vfrom && currDate <= vto)
        setGetData(v?.prayerHours);
      else 
        setGetData(v?.prayerHours);
      })
  }
  
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch("https://msa-production.onrender.com/showPrayers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const value = await response.json();
        if (response.ok) { 
          handleSendData(value);
          // setGetData(value[0]?.prayerHours);
        }
        else alert("There was an error");
      } catch (err) {
        alert(err);
      }
    };
    fetchPrayerTimes();
  }, []);

  return (
    <>
      <PrayerDisplay data={getData} />
    </>
  );
};

export default PrayerTimesFetch;
