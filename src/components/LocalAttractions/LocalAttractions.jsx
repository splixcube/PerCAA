import data from "./data.json";
import RightContent from "../RightContent/RightContent";
import "./LocalAttractions.css";
import Footer from "../Footer/Footer";
import ImportantBanner from "../ImportantLink/ImportantLink";

// If you're using CSS Modules for heading styling:
// import styles from "./LocalAttractions.module.css"; // <-- use if needed

const LocalAttractions = () => {
  return (
    <>
      <ImportantBanner />
      

      <div className="papaContainer">
        
        <div className="leftContainer">
            {/* 👇 Heading inserted here */}
      <div className="mainHeading">
        <span className="titleLine"></span>
        <h1>Local Attractions</h1>
        <span className="titleLine"></span>
      </div>
      
          <div className="attrations-container">
            
            {data.map((attraction, index) => (
              <div className="attractions-info" key={index}>
                <hr />
                <div className="attraction-heading">
                  <a
                    href={attraction.wiki}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-style"
                  >
                    {attraction.name}
                  </a>
                </div>

                <div className="attraction-details">
                  <div className="image-container">
                    <img src={attraction.image} alt="" />
                  </div>
                  <div className="desc-container">
                    {attraction.description}
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        <div className="rightContainer">
          <RightContent />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LocalAttractions;
