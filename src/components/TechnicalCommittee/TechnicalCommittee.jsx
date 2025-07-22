import styles from "./TechnicalCommittee.module.css"
import RightContent from "../RightContent/RightContent"
import data from "./data.json"
import Footer from "../Footer/Footer"
const TechnicalCommittee = ()=>{
    return(
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
  <h1>Technical Committee</h1>
  <span className={styles.titleLine}></span>
</div>

                <div className={styles.contianer_wrapper}>
                <div className={styles.container}>
                    {
                        data.map((item , index)=>{
                            return(
                                <div className={styles.card}>
                                    <h2>{item.name}</h2>
                                    <p>{item.college}</p>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
            <div className="rightContainer">
                <RightContent></RightContent>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}


export default TechnicalCommittee