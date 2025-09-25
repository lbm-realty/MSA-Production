import { useState } from "react";

const UpdateAPI = () => {
  const token = localStorage.getItem("accessToken");

  const [field, setField] = useState({
    field1: "",
    field2: "",
  });

  const [data, setData] = useState({
    title: "",
    date: "",
    time: "",
    location1: "",
    description: "",
    location2: "",
  });

  const handleTargetUpdate = (e) => {
    e.preventDefault();
    setField({
        ...field,
        field1: e.target.value,
    })
  }

  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;

    const enteredData = {
        ...data,
        [name]: value, 
    };
    setData({
        ...data, 
        [name]: value,
    });
    setField({
        ...field,
        field2: enteredData,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const field1 = {};
    const field2 = {};
    const updatedData = { field1, field2};
    updatedData.field1 = field.field1;
    for (const key in field.field2) {
        if (field.field2[key] !== "")
            updatedData.field2[key] =  field.field2[key]
    }
    
    try {
      const response = await fetch(
        `${process.env.REACT_APP_PRODUCTION}/api/events/updateEntry`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );
      const value = await response.json();
      if (response.ok)
        alert(`${value.result}`);
      else
        alert(`There was an error: ${value.message}`);
    } catch (err) {
      alert(`An error occurred: ${err}`);
    }
  };

  return (
    <form className="events-form">
      <h3>Update an Event</h3>
      <h3 className="update-h3">
        Enter the title of the event you wish to update
      </h3>
      <label>
        Title:
        <br />
        <input
          type="text"
          placeholder=""
          onChange={handleTargetUpdate}
        />
      </label>
      <h3 className="update-h3">
        Now enter a value ONLY for the fields you wish to update, leave the
        others blank
      </h3>
      <label>
        Title:
        <br />
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChangeUpdate}
        />
      </label>
      <label>
        Date: (MM-DD-YYYY)
        <br />
        <input
          type="text"
          name="date"
          value={data.date}
          onChange={handleChangeUpdate}
        />
      </label>
      <label>
        Time:
        <br />
        <input
          type="text"
          name="time"
          value={data.time}
          onChange={handleChangeUpdate}
        />
      </label>
      <label>
        Location-1:
        <br />
        <input
          type="text"
          name="location1"
          value={data.location1}
          onChange={handleChangeUpdate}
        />
      </label>
      <label>
        Description:
        <br />
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleChangeUpdate}
        />
      </label>
      <label>
        Location-2:
        <br />
        <input
          type="text"
          name="location2"
          value={data.location2}
          onChange={handleChangeUpdate}
        />
      </label>
      <button className="api-btn" onClick={handleUpdate}>
        SUBMIT
      </button>
    </form>
  );
};

export default UpdateAPI;
