import React from "react";
import "./ImportantLink.css"; 

const ImportantBanner = () => {
  return (
    <div className="important-banner">
      <div className="important-label">IMPORTANT</div>
      <div className="marquee-container">
        <div className="marquee-content">
          <a
            href="https://cmt3.research.microsoft.com/PerCAA2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Paper Submission Link : Please Click Here To Submit Paper 
          </a>
          <a
            href="https://cmt3.research.microsoft.com/PerCAA2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Paper Submission Link : Please Click Here To Submit Paper
          </a>
          <a
            href="https://cmt3.research.microsoft.com/PerCAA2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            • Paper Submission Link : Please Click Here To Submit Paper
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImportantBanner;
