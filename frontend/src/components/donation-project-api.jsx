import { useEffect } from "react";
import { useState } from "react";
import { Trash2 } from 'lucide-react'

const DonationProjectAPI = () => {

    const token = localStorage.getItem("accessToken");
    const [projectContent, setprojectContent] = useState({
        name: "", 
        description: "",
        amount: null
    })
    const [donationProjects, setDonationProjects] = useState([]);

    const handleSubmission = async () => {

        if (projectContent.name.trim().length < 1 || isNaN(projectContent.amount) || projectContent.amount === null || projectContent.amount < 0) {
            alert("Please make sure the project name and amount fields are not empty");
            return;
        }

        try {
            const response = await fetch(`https://msa-production.onrender.com/add-donation-project`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(projectContent)
            });
            
            const res = await response.json();
            if (response.ok) alert(res.message);
            else alert(res.message);
        
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
     const fetchDonationProjects = async () => {
      try {
        const response = await fetch(`https://msa-production.onrender.com/fetch-donation-projects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
            
        const res = await response.json();
        if (response.ok) setDonationProjects(res.message);
        else alert(res.message);
        
      } catch (err) {
            alert(err);
      }
     }

     fetchDonationProjects();

    }, [token]);

    useEffect(() => {
        setDonationProjects(donationProjects);
    }, [donationProjects]);

    const deleteProject = async (projectId) => {
        try{
            const response = await fetch(`https://msa-production.onrender.com/delete/project/${projectId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
                
            const res = await response.json();
            if (response.ok) alert(res.message);
            else alert(res.message);
            
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="py-40 px-20 sm:p-40 bg-black text-white flex flex-col gap-4">
            <h1 className="text-xl sm:text-2xl font-bold">Add project</h1>
            <div className="flex flex-col gap-4">
                <p>* Enter project Name: </p>
                <input 
                className="text-black"
                value={projectContent.name}
                type="text"
                required
                placeholder="Dawah, Scholarship,..." 
                onChange={(e) => setprojectContent({ ...projectContent, name: e.target.value})}
                />
                <p>Enter Project Description: </p>
                <input 
                className="text-black"
                type="text"
                placeholder="Will help us in dawah..." 
                value={projectContent.description}
                onChange={(e) => setprojectContent({ ...projectContent, description: e.target.value})}
                />
                <p>* Enter Amount in USD: </p>
                <input 
                className="text-black"
                type="number"
                required
                placeholder="Number only, 1, 5,..." 
                value={projectContent.amount}
                onChange={(e) => setprojectContent({ ...projectContent, amount: parseInt(e.target.value, 10)})}
                />
                <button 
                className="bg-gray-100 text-black"
                onClick={() => handleSubmission()}
                >Submit</button>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold">Delete Project</h1>
            <div>
                {donationProjects.map((project) => (
                    <div className="bg-gray-800 p-2 rounded-lg">
                        <div className="flex items-center gap-4">
                        {project.name}
                        <Trash2 onClick={() => deleteProject(project._id)} className="h-4 w-4 text-red-500 cursor-pointer" />
                        </div>
                        <p>${project.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DonationProjectAPI;