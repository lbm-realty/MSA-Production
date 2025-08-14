import { useState } from "react";

const NewsletterAPI = () => {

    const token = localStorage.getItem("accessToken");
    const [content, setContent] = useState({
        month: null,
        pdfFile: ""
    });

    const handleNewsletterContent = async () => {
        if (content.month > 12 || content.month < 1) {
            alert("Please make sure the month is entered as a valid number");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("month", content.month);   // normal text field
            formData.append("pdfFile", content.pdfFile);  
  
            const response = await fetch(`https://msa-production.onrender.com/add-newsletter`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });
            
            const res = await response.json();
            if (response.ok) alert(res);
            else alert(res);
        
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="flex flex-col py-44 bg-black px-12 gap-4 justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <p className="text-white text-sm sm:text-lg">Please enter the month by number: </p>
                <input
                 value={content.month}
                 placeholder="Enter 1 for Jan, 2 for Feb, ..."
                 onChange={(e) => setContent({ ...content,  month: e.target.value })}
                 type="number" />
            </div>
            <div className="flex justify-center items-center gap-4">
                <p className="text-white text-sm sm:text-lg">Please choose pdf file: </p>
                <input       
                 type="file"  
                 accept="application/pdf"
                 onChange={(e) =>
                 setContent({ ...content, pdfFile: e.target.files[0] })} 
                />
            </div>
            {content.pdfFile && (
                <p className="text-white mt-2">
                    Selected file: <strong>{content.pdfFile.name}</strong>
                </p>
            )}
            <button
             onClick={() => handleNewsletterContent()} 
             className="bg-white py-2 px-6 rounded-lg">Submit</button>
       </div>
    )
}

export default NewsletterAPI;