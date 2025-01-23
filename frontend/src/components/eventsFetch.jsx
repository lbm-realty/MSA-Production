import EventDisplay from "./eventsDisplay";
import { useState } from "react";
// import ComingSoon from "./newsletter-component";

const EventsFetch = () => {
  const [eventsData, setEventsData] = useState([]);

  // useEffect(() => {
  const fetchData = async () => {
    console.log("The function is being called!");
    try {
      const response = await fetch(
        "https://msa-production.onrender.com/api/events/showData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      if (response.ok) {
        setEventsData(res);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log({ err: err.message });
    }
  };
  setTimeout(() => {
    fetchData()
  }, 2000);
// }, [])
return (
    <>
      <EventDisplay data={eventsData} />
    </>
  );
};

export default EventsFetch;
