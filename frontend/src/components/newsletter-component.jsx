import React, { useState } from "react";
import { useEffect } from "react";
import "../css/newsletter.css";

const ComingSoon = () => {

  const [isArchiveOpen, setArchiveOpen] = useState();
  const [ishovered, setHovered] = useState();
  // const [isMobile, setIsMobile] = useState(false);
  const [pdfs, setPdfs] = useState([]);
  const [archivePdfs, setArchivePdfs] = useState([]);
  const [width, setWidth] = useState(window.innerWidth)
  const isMobile = width <= 768;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const response = await fetch(`https://msa-production.onrender.com/fetch-newsletters`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        const res = await response.json();
        
        if (response.ok){
          setPdfs(res);
        }
         else 
          alert(res);

      } catch (err) {
        alert(err);
      }
    }

    fetchNewsletter();

  }, [])

  useEffect(() => {
    setArchivePdfs(pdfs.length > 1 ? pdfs.slice(2) : []);

  }, [pdfs])

  // useEffect(() => {
  //   setArchivePdfs( pdfs.length > 1 ? pdfs.slice(1) : [] );
  //   setPdfs( pdfs.length > 1 ? pdfs.slice(0, 2) : pdfs);
  // }, [pdfs]);

  const toggleArchive = () => {
    setArchiveOpen(!isArchiveOpen);
  };

  const toggleHover = () => {
    setArchiveOpen(!isArchiveOpen);
    setHovered(!ishovered);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="newsletter-container">
      <h3 className="newsletter-header">Welcome to our Newsletter!</h3>       
        <div className="inner-container">
        {isMobile ? (
          <h4>
            For full access to the newsletter, visit the website
            on a desktop page
          </h4>
        ) : (
          ""
        )}
          {pdfs.slice(0,2).map((pdf, index) => (
            <div className="pdf-box" key={index}>
              <h3>{months[pdf.month - 1]} Newsletter</h3>
              <iframe
                src={`https://msa-production.onrender.com/newsletter/${pdf._id}/pdf`}
                title={`Newsletter-${months[pdf.month - 1]}`}
                className="pdf-frame"
              />
            </div>
          ))}
        </div>
      {/* </div> */}

      <div className="arch-section">
        {window.width > "600px" ? (
          <button onClick={toggleArchive} className="arch-toggle-button">
            {isArchiveOpen ? "Hide Archives" : "Show Archives"}
          </button>
        ) : (
          <button onClick={toggleHover} className="arch-toggle-button">
            {isArchiveOpen ? "Hide Archives" : "Show Archives"}
          </button>
        )}
        <div className="adjusting-border"></div>

        <div className={`arch-content-${isArchiveOpen ? "open" : "closed"}`}>
          {isArchiveOpen &&
            archivePdfs.map((pdf, index) => (
              <div className="pdf-box" key={index}>
                <h3>{months[pdf.month - 1]} Newsletter</h3>
                <iframe
                  src={`https://msa-production.onrender.com/newsletter/${pdf._id}/pdf`}
                  title={`Newsletter-${months[pdf.month - 1]}`}
                  className="pdf-frame"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
