import RightContent from "../RightContent/RightContent"
import "./AuthorGuidelines.css";
import Footer from "../Footer/Footer";
const AuthorGuidelines = ()=>{
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
                    <div className="author_guideline_heading">
                        Author Guidelines
                    </div>
                    <div style={{ height: "600px", width: "100%" }}>
      <iframe id="pdf-preview"
        src="/docs/Author_Guidelines1.pdf"
        title="PDF Preview"
        width="70%"
        height="70%"
        style={{ border: "none" }}
      ></iframe>
    </div>

                    <div className="doc_container">
                        <a href="/docs/Author_Guidelines1.doc" download="Paper Format" className="doc_details" >Click here for paper format of IET Conference Proceeding</a>
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

export default AuthorGuidelines