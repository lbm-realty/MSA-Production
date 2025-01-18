import React, { useState } from "react";
import "../css/eventsApi.css";

const DeleteAPI = () => {
    const token = localStorage.getItem("accessToken");

    const [deleteData, setDeleteData] = useState({
        title1: "",
      });

    const handleDeleteChange = (e) => {
        setDeleteData({
          ...deleteData,
          title1: e.target.value,
        });
      };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(
            "https://msa-production.onrender.com/api/events/deleteEntry",
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
            alert(`The entry ${res.deleteEntry} was deleted successfully`);
          } else {
            alert(`An error occured: ${res.message}`);
          }
        } catch (err) {
          alert(`An error occured: ${err}`);
        }
      };

    return (
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
            <button className="api-btn" onClick={handleDelete}>SUBMIT</button>
          </form>
          ) 
}

export default DeleteAPI;