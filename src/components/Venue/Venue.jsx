import RightContent from "../RightContent/RightContent";
import "./Venue.css";   
import Footer from "../Footer/Footer";

const Venue = () => {
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
          <div className="details">
            <img src="/TopCrousalIMages/Poornima_venue.png" alt="" />
            <div className="venue-details">
              <div className="venue-heading">
                Poornima College Of Engineering
              </div>
              <div className="venue-address">
                ISI-6, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022
              </div>
            </div>
          </div>
          {/* Google Map Embed */}
      <div className="map-container" style={{ textAlign: "center", margin: "40px auto" }}>
        <h3>📍 Location Map</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.3354834915117!2d75.85364299999999!3d26.765574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c1c7f8fffffff%3A0x7ee5a5f5b127bb8d!2sPoornima%20College%20of%20Engineering%20-%20PCE%20%7C%20Best%20College%20for%20Engineering%20in%20Jaipur%20%7C%20NAAC%20A%2B%20Accredited!5e0!3m2!1sen!2sin!4v1753116313513!5m2!1sen!2sin"
          width="90%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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

export default Venue;
