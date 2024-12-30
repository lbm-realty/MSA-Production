import React, { useState } from "react";
import  '../css/apiTest.css'

const ApiTest = () => {
    const [data, setData] = useState({
        title: '',
        date: '',
        time: '',
        location1: '',
        description: '',
        location2: ''
    })
    const [deleteData, setDeleteData] = useState({
        title1: ''
    })

    const handleChangeCreate = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value,
        });
    };

    const handleDeleteChange = (e) => {
        setDeleteData({
            ...deleteData,
            title1: e.target.value
        })
    }

    const handleCreation = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8282/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const value = await response.json();
            if (response.ok) {
                alert(`Event Created: ${value}`)
            } else {
                alert(`There was an error: ${value.error}`)
            } 
        } catch (err) {
                alert(`An error occured: ${err}`);
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8282/api/events/deleteEntry' , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(deleteData),
            });

            const res = await response.json();
            if (response.ok) {
                alert(`The entry ${res} was deleted successfully`);
            } else {
                alert(`An error occured: ${res.message}`)
            }
        } catch (err) {
            alert(`An error occured: ${err}`);
        }
    }

    return (
        <div className="events-form-container">
            <form className="events-form" onSubmit={handleCreation} >
                <h3>Create a new event</h3>
                <label>
                    Title:
                    <br/>
                    <input 
                    type="text" 
                    required 
                    name="title"
                    value={data.title}
                    onChange={handleChangeCreate} />
                </label>
                <label>
                    Date: (MM-DD-YYYY)
                    <br/>
                    <input 
                    type="text"
                    required
                    name="date"
                    value={data.date}
                    onChange={handleChangeCreate} />
                </label>
                <label>
                    Time: (HH:MM)
                    <br/>
                    <input 
                    type="text"
                    required
                    name="time"
                    value={data.time}
                    onChange={handleChangeCreate} />
                </label>
                <label>
                    Location-1:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="location1"
                    value={data.location1}
                    onChange={handleChangeCreate} />
                </label>
                <label>
                    Description:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="description"
                    value={data.description}
                    onChange={handleChangeCreate} />
                </label>
                <label>
                    Location-2:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="location2"
                    value={data.location2}
                    onChange={handleChangeCreate} />
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
    )
}

export default ApiTest;

