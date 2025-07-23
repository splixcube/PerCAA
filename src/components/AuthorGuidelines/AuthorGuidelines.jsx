import RightContent from "../RightContent/RightContent"
import "./AuthorGuidelines.css";
import Footer from "../Footer/Footer";
import ImportantBanner from "../ImportantLink/ImportantLink";

const AuthorGuidelines = ()=>{
    return(
        <>
           <ImportantBanner/>
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