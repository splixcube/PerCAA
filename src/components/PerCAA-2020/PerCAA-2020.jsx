import './PerCAA-2020.css'; // plain CSS import
import Footer from "../Footer/Footer";
import RightContent from "../RightContent/RightContent";
import ImportantBanner from "../ImportantLink/ImportantLink";

const PerCAA_2020 = () => {
  return (
    <>
      <ImportantBanner />
      <div className="papaContainer">
  <div className="leftContainer">

    {/* === Heading Only === */}
    <div className="headingMain">
      <h1>PerCAA-2020</h1>
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

export default PerCAA_2020;
