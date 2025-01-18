import { useState } from "react";
import './protectedRoute'
import '../css/signin.css'

const Signin = () => {
    const [inputData, setInputData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://msa-production.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputData),
            });
            const value = await response.json();
            if (response.ok) {
                const { accessToken } = value;
                sessionStorage.setItem('accessToken', accessToken);
                window.location.href = '/addEvents';
            } else
                alert(`There was an error: ${value.message}`);
        } catch (error) {
            alert(`An error ocurred: ${error}`);
        }
    }

    return (
        <div className="signin-outer">
            <h3>For Admin Use Only</h3>
                <label>
                    Email:
                    <br />
                    <input 
                    type="text"
                    name="email"
                    value={inputData.email}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Password: 
                    <br />
                    <input 
                    type="text" 
                    name="password"
                    value={inputData.password}
                    onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Signin;