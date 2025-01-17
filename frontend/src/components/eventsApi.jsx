import React, { useState } from "react";
import "../css/eventsApi.css";
import Logout from "./logout";

const EventsApi = () => {
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

  const [deleteData, setDeleteData] = useState({
    title1: "",
  });

  const handleDeleteChange = (e) => {
    setDeleteData({
      ...deleteData,
      title1: e.target.value,
    });
  };

  const handleCreation = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8282/api/events/addEntry", {
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

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8282/api/events/deleteEntry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(deleteData),
        }
      );

      const res = await response.json();
      if (response.ok) {
        alert(`The entry ${res} was deleted successfully`);
      } else {
        alert(`An error occured: ${res.message}`);
      }
    } catch (err) {
      alert(`An error occured: ${err}`);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch('http://localhost:8282/api/events/updateEntry', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token},`
            },
            body: JSON.stringify(),
        }
        );
        const value = await response.json();
        if (response.ok) {
            alert("Entry Updated");
        } else {
            alert("There was an error: ");
        }
    } catch (err) {
        alert(`An error occurred: ${err}`)
    }
  }

  {
    return token ? (
      <div className="events-outer">
        <Logout />
        <div className="events-form-container">
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
            <button onClick={handleCreation}>SUBMIT</button>
          </form>
          <div className="separator"></div>
          <form className="events-form">
            <h3>Delete existing event</h3>
            <label>
              Title:
              <br />
              <input
                type="text"
                required
                placeholder=""
                onChange={handleDeleteChange}
              />
            </label>
            <button onClick={handleDelete}>SUBMIT</button>
          </form>
        </div>
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
  }
};

export default EventsApi;
