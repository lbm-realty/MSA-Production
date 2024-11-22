import React, { useState } from "react";
import "../css/newsletter.css";
import pdf1 from "../images/MSA August Newsletter[1].pdf";
import pdf2 from "../images/MSA September Newsletter[1].pdf";
import pdf3 from "../images/MSA October Newsletter.pdf";

const ComingSoon = () => {
  const archivePdfs = [{ month: "August", file: pdf1 }];

  const pdfFiles = [
    { month: "October", file: pdf3 },
    { month: "September", file: pdf2 },
  ];
  const [isArchiveOpen, setArchiveOpen] = useState();
  const [ishovered, setHovered] = useState();

  const toggleArchive = () => {
    setArchiveOpen(!isArchiveOpen);
  };

  const toggleHover = () => {
    setArchiveOpen(!isArchiveOpen);
    setHovered(!ishovered);
  };

  return (
    <div className="newsletter-container">
      <h3 className="newsletter-header">Welcome to our Newsletter!</h3>
      <div className="outer-container">
        <h4>
          For full access to the newsletter, visit the website on a desktop page
        </h4>
        <div className="inner-container">
          {pdfFiles.map((pdf, index) => (
            <div className="pdf-box" key={index}>
              <h3>{pdf.month} Newsletter</h3>
              <iframe
                src={pdf.file}
                title={`Newsletter-${pdf.month}`}
                className="pdf-frame"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="arch-section">
        {window.width > "600px" ? (
          <button onClick={toggleArchive} className="archive-toggle-button">
            {isArchiveOpen ? "Hide Archives" : "Show Archives"}
          </button>
        ) : (
          <button onClick={toggleHover} className="arch-toggle-button">
            {isArchiveOpen ? "Hide Archives" : "Show Archives"}
          </button>
        )}
        <div className="adjusting-border"></div>

        <div className={`arch-content-${isArchiveOpen ? "open" : "closed"}`}>
          {isArchiveOpen && archivePdfs.map((pdf, index) => (
            <div className="pdf-box" key={index}>
              <h3>{pdf.month} Newsletter</h3>
              <iframe
                src={pdf.file}
                title={`Newsletter-${pdf.month}`}
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
