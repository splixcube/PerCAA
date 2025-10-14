import RightContent from "../RightContent/RightContent"
import styles from "./Publication.module.css"
import IET_logo from '/logos/IET_logo.png'
import Scopus from '/logos/spocuslogo.png'
import Bentham_logo from '/logos/Bentham_logo.png'
import Footer from "../Footer/Footer"
import ImportantBanner from "../ImportantLink/ImportantLink";
const Publication = () => {
    return (
        <>
            <ImportantBanner />
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
                        <div className={styles.heading}>SCOPUS INDEX JOURNAL</div>
                        <div className={styles.publicationData}>

                            <div className={styles.data}>
                                The conference proceedings will be indexed in Scopus, the world’s largest abstract and citation database of peer-reviewed literature, owned by Elsevier. Scopus covers more than 40,000 journals, books, and conference proceedings across science, technology, medicine, social sciences, and humanities. Recognized globally for research quality and impact, Scopus provides citation tracking, author profiles, and institutional metrics. Publications indexed in Scopus ensure international visibility, credibility, and recognition in academic and professional communities.<br/><br/>

                                <a href="https://www.eurekaselect.com/public/call-for-papers-detail/7267/specialissue"
                                target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', wordBreak: 'break-word' }}>
                                      https://www.eurekaselect.com/public/call-for-papers-detail/7267/specialissue
                                </a>
                                <br/>
                                <br/>

                                "Some selected paper submitted to mention journal. Terms and condition apply"
                            </div>
                            <img className={styles.IET_logo} src={Scopus} alt="" />
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