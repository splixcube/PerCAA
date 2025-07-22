import './PerCAA-2024.css';
import Footer from "../Footer/Footer";
import RightContent from "../RightContent/RightContent";

const PerCAA_2024 = () => {
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
      {/* === Main Layout === */}
      <div className="papaContainer">
        {/* === Left Content === */}
        <div className="leftContainer">
          {/* === Heading === */}
          <div className="headingMain">
            <h1>PerCAA-2024</h1>
            <p className="subHeading">
              <strong>2<sup>nd</sup> International Conference on Pervasive Computing and Advanced Algorithms</strong>
            </p>
            <p className="details">PerCAA 2024 marked the 2nd International Conference on Pervasive Computing Advances and Applications, held on October 18–19, 2024, at Poornima College of Engineering, Jaipur, Rajasthan. Technically sponsored by the Meerut ACM Professional Chapter, the conference served as a vibrant platform for researchers, academicians, and industry experts to exchange ideas and showcase innovations in the ever-evolving field of pervasive computing. With a strong emphasis on real-world applications and future-forward technologies, PerCAA 2024 highlighted cutting-edge advancements that are shaping smarter, more connected environments.</p>
          </div>

          {/* === Glimpses === */}
          <div className="glimpsesSection">
            <h2>Glimpses of PerCAA-2024</h2>
            <div className="glimpsesGallery">
              <img src="\PerCAA2024\Glimpse1.jpg" alt="Glimpse 1" />
              <img src="\PerCAA2024\Glimpse2.jpg" alt="Glimpse 2" />
              <img src="\PerCAA2024\Glimpse3.jpg" alt="Glimpse 3" />
              <img src="\PerCAA2024\Glimpse4.jpg" alt="Glimpse 4" />
              <img src="\PerCAA2024\Glimpse5.jpg" alt="Glimpse 5" />
              <img src="\PerCAA2024\G.jpg" alt="Glimpse 6" />
            </div>
          </div>

          {/* === Organising Committee === */}
          <div className="committeeSection">
            <h2>Organising Committee</h2>
            <ul className="committeeList">
              <li>Poornima College of Engineering, Jaipur, Rajasthan, India</li>
              <li>Jaipur ACM Professional Chapter</li>
              <li>Meerut ACM Professional Chapter</li>
            </ul>
          </div>

          {/* === Past Conference Papers === */}
          <div className="pastPapersSection">
            <h2>Past Conference Papers</h2>
            <ul className="paperLinks">
              <li>
                <a href="https://ieeexplore.ieee.org/xpl/conhome/10998970/proceeding" target="_blank" rel="noopener noreferrer">
                  Click here for Published Papers of PerCAA-2024
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* === Right Sidebar Content === */}
        <div className="rightContainer">
          <RightContent />
        </div>
      </div>

      {/* === Footer === */}
      <Footer />
    </>
  );
};

export default PerCAA_2024;
