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
                       Guest : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.Guest.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div><div className={styles.heading}>
                        Session Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.SessionChair.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p className={styles.designation_title}>{item.title}</p>
                                            <p>{item.institution} , {item.location}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                        {/* <div className={styles.container}>
        <h2 style={{ textAlign: 'center',fontFamily: 'Poppins', width: '100%', marginTop: '50px',marginBottom:'50px', fontSize: '3.5rem' }}>
            To be updated soon...
        </h2>
    </div> */}
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