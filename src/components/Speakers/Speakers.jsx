import RightContent from "../RightContent/RightContent"
import styles from "./Speakers.module.css"
import data from "./data.json"
import Footer from "../Footer/Footer"
import ImportantBanner from "../ImportantLink/ImportantLink";
const Speakers = ()=>{
    return(
        <>
            <ImportantBanner/>
            <div className="papaContainer">
                <div className="leftContainer">
                <div className={styles.heading}>
                    Keynotes & Session Chairs : 
                </div>
                    <div className={styles.contianer_wrapper}>
    <div className={styles.container}>
        <h2 style={{ textAlign: 'center',fontFamily: 'Poppins', width: '100%', marginTop: '50px',marginBottom:'50px', fontSize: '3.5rem' }}>
            To be updated soon...
        </h2>
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

export default Speakers;