import RightContent from "../RightContent/RightContent"
import Footer from "../Footer/Footer"
import data from "./data.json"
import styles from "./LocalOrganizingCommittee.module.css"
import student from "./students.json"
const LocalOrganizingCommittee = ()=>{
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
  <h1>Local Organizing Committee</h1>
  <span className={styles.titleLine}></span>
</div>

                    <div className={styles.contianer_wrapper}>
                    <div className={styles.container}>
                        {
                            data.map((item , index)=>{
                                return(
                                    <div className={styles.card}>
                                        {/*<img src={item.img} alt={item.name} className={styles.profileImage} />*/}
                                        <h2>{item.name}</h2>
                                        <p className={styles.designation_title}>{item.designation}</p>
                                        <p>{item.institution}</p>
                                    </div>
                                )
                            })
                        }
                        {/* {
                            student.map((item , index) => {
                                return(
                                    <div className={styles.card}>
                                        <h2>{item.name}</h2>
                                        <p>{item.details}</p>
                                    </div>
                                )
                            })
                        } */}
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


export default LocalOrganizingCommittee