import React, { useState } from "react";
import "../css/eventsApi.css";

const CreateAPI = () => {
    const token = localStorage.getItem("accessToken");

    const [data, setData] = useState({
        title: "",
        date: "",
        time: "",
        location1: "",
        description: "",
        location2: "",
      });

      const handleChangeCreate = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };

    const handleCreation = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("https://msa-production.onrender.com/api/events/addEntry", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
          });
          const value = await response.json();
          if (response.ok) {
            alert(`Event Created: ${value}`);
          } else {
            alert(`There was an error: ${value.message}`);
          }
        } catch (err) {
          alert(`An error occured: ${err}`);
        }
      };

        return  (
              <form className="events-form" onSubmit={handleCreation}>
                <h3>Create a new event</h3>
                <label>
                  Title:
                  <br />
                  <input
                    type="text"
                    required
                    name="title"
                    value={data.title}
                    onChange={handleChangeCreate}
                  />
                </label>
                <label>
                  Date: (MM-DD-YYYY)
                  <br />
                  <input
                    type="text"
                    required
                    name="date"
                    value={data.date}
                    onChange={handleChangeCreate}
                  />
                </label>
                <label>
                  Time:
                  <br />
                  <input
                    type="text"
                    required
                    name="time"
                    value={data.time}
                    onChange={handleChangeCreate}
                  />
                </label>
                <label>
                  Location-1:
                  <br />
                  <input
                    type="text"
                    required
                    name="location1"
                    value={data.location1}
                    onChange={handleChangeCreate}
                  />
                </label>
                <label>
                  Description:
                  <br />
                  <input
                    type="text"
                    required
                    name="description"
                    value={data.description}
                    onChange={handleChangeCreate}
                  />
                </label>
                <label>
                  Location-2:
                  <br />
                  <input
                    type="text"
                    required
                    name="location2"
                    value={data.location2}
                    onChange={handleChangeCreate}
                  />
                </label>
                <button className="api-btn" onClick={handleCreation}>SUBMIT</button>
                </form>
        ) 
}

export default CreateAPI;