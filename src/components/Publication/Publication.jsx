import RightContent from "../RightContent/RightContent"
import styles from "./Publication.module.css"
import IET_logo from '/logos/IET_logo.png'
import Bentham_logo from '/logos/Bentham_logo.png'
import Footer from "../Footer/Footer"
const Publication = () => {
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
                    <div className={styles.mainHeading}>
                      <span className={styles.titleLine}></span>
                      <h1>Publication Partner</h1>
                      <span className={styles.titleLine}></span>
                    </div>
                    <div>
                        <div className={styles.heading}>IET</div>
                        <div className={styles.publicationData}>

                            <div className={styles.data}>
                                The confernece proceeding will be published by the Institution of Engineering and Technology (IET) on IET Digital Library, indexed by IET Inspec . The IET Digital Library holds more than 190,000 technical papers from 1994 onwards for all IET journals, magazines, books, conference publications and seminar digests, the IET&apos;s member magazine Engineering & Technology, plus seminar digests and conference publications.
                            </div>
                            <img className={styles.IET_logo} src={IET_logo} alt="" />
                        </div>

                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <div className={styles.heading}>SCOPUS INDEX GENERAL COMING SOON...</div>
                        <div className={styles.publicationData}>

                            <div className={styles.data}>
                                
                            </div>
                            <img className={styles.IET_logo} src={{}} alt="" />
                        </div>

                    </div>
                    
                    {/* <div className={styles.books_container}>
                        <div className={styles.book_card}>
                            <p className={styles.book_card_heading}>Pervasive and Ubiquitous Computing: Innovations and Challenges</p>
                            <p className={styles.updated_soon_text}>Will Be Updated Soon</p>
                        </div>
                        <div className={styles.book_card}>
                            <p className={styles.book_card_heading}>Mobile Communication Systems: A Comprehensive Guide to Networking</p>
                            <p className={styles.updated_soon_text}>Will Be Updated Soon</p>
                        </div>
                    </div> */}
                </div>
                <div className="rightContainer">
                    <RightContent />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Publication