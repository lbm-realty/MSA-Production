import EventDisplay from "./eventsDisplay";
import { useEffect, useState } from "react";
import ComingSoon from "./newsletter-component";

const EventsFetch = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8282/api/events/showData",
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
        console.log("Successful");
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log({ err: err.message });
    }
  };
  fetchData();
}, [])
return (
    <>
      <EventDisplay data={eventsData} />
    </>
  );
};

export default EventsFetch;
