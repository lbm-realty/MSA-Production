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
    const [deleteData, setDeleteData] = useState('')

    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value,
        });
    };

    const handleDeleteChange = (e) => {
        setDeleteData(e.target.value)
    }

    const handleSubmit = async (e) => {
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

    return (
        <div className="events-form-container">
            <form className="events-form" onSubmit={handleSubmit} >
                <h3>Create a new event</h3>
                <label>
                    Title:
                    <br/>
                    <input 
                    type="text" 
                    required 
                    name="title"
                    value={data.title}
                    onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="date"
                    value={data.date}
                    onChange={handleChange} />
                </label>
                <label>
                    Time:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="time"
                    value={data.time}
                    onChange={handleChange} />
                </label>
                <label>
                    Location-1:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="location1"
                    value={data.location1}
                    onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="description"
                    value={data.description}
                    onChange={handleChange} />
                </label>
                <label>
                    Location-2:
                    <br/>
                    <input 
                    type="text"
                    required
                    name="location2"
                    value={data.location2}
                    onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>SUBMIT</button>
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
                        placeholder={deleteData} 
                        onChange={handleDeleteChange}
                        />                       
                </label>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default ApiTest;

// const ApiTest = () => {
//     return (
//         <>
//         <h3>Hello Hi Bye</h3>
//         <h2>No byesonly hi's</h2>
//         <h4>HI guys Hello</h4>
//         </>
//     )
// }

// export default ApiTest;
