import styles from "./OrganizingCommittee.module.css"
import data from "./data.json"
import Footer from "../Footer/Footer"
import RightContent from "../RightContent/RightContent"
const OrganizingCommittee =  ()=>{
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
  <h1>Organizing Committee</h1>
  <span className={styles.titleLine}></span>
</div>

                    <div className={styles.heading}>
                        General Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                    <div className={styles.container}>
                        {
                            data.GeneralChair.map((item , index)=>{
                                return(
                                    <div className={styles.card}>
                                        {
                                            item.img &&(
                                                <img src={item.img}/>
                                            )
                                        }
                                        <h2>{item.name}</h2>
                                        <p className={styles.designation_title}>{item.title}</p>
                                        <p>{item.institution} , {item.location}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                    <div className={styles.heading}>
                        General Co Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.GeneralCoChair.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Organizing Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.OrganizingChair.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Convenor : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.Convenor.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Co Convenor : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.CoConvenor.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Track Chair : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.TrackChair.map((item , index)=>{
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
                        Publicity Chair/ News Coverage/ Media Partner : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.PublicityChair.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Web Team : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.WebTeam.map((item , index)=>{
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
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.WebTeamStudents.map((item , index)=>{
                                    return(
                                        <div className={styles.card}>
                                            <img src={item.img}></img>
                                            <h2>{item.name}</h2>
                                            <p>{item.details}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/*
                    <div className={styles.heading}>
                        Travel Support : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.TravelSupport.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Banner/ Flex/ Flyer : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.BannerFlexFlyer.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Registration Desk : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.RegistrationDesk.map((item , index)=>{
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
                    <div className={styles.heading}>
                        Venue, Booking, Arrangements, Catering, IOM : 
                    </div>
                    <div className={styles.contianer_wrapper}>
                        <div className={styles.container}>
                            {
                                data.VenueBookingArrangementsCateringIOM.map((item , index)=>{
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
                    </div>*/}
                </div>
                <div className="rightContainer">
                    <RightContent></RightContent>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default OrganizingCommittee
