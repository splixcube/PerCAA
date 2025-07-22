import './PerCAA-2023.css'; // plain CSS import
import Footer from "../Footer/Footer";
import RightContent from "../RightContent/RightContent";

const PerCAA_2023 = () => {
  return (
    <>
      <div className="important-banner">
  <div className="important-label">IMPORTANT</div>
  <div className="marquee-container">
    <div className="marquee-content">
      <a href="https://cmt3.research.microsoft.com/PERCAA2024" target="_blank" rel="noopener noreferrer">
        Paper Submission Link : Please Click Here To Submit Paper • 
      </a>
      <a href="https://cmt3.research.microsoft.com/PERCAA2024" target="_blank" rel="noopener noreferrer">
        Paper Submission Link : Please Click Here To Submit Paper • 
      </a>
      <a href="https://cmt3.research.microsoft.com/PERCAA2024" target="_blank" rel="noopener noreferrer">
        Paper Submission Link : Please Click Here To Submit Paper • 
      </a>
    </div>
  </div>
</div>
      <div className="papaContainer">
  <div className="leftContainer">

    {/* === Heading Only === */}
    <div className="headingMain">
      <h1>PerCAA-2023</h1>
    </div>
    <div className="comingSoonContainer">
  <h1>Coming Soon...</h1>
</div>


  </div>

        
        {/* === Sidebar=== */}
        <div className="rightContainer">
          <RightContent />
        </div>
    </div>

      <Footer />
    </>
  );
};

export default PerCAA_2023;
