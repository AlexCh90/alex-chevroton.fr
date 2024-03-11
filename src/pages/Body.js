import "../assets/styles/body.scss"
import Footer from "../components/Footer";
import Services from "../components/Services";

function Body (){
    return(
        <div className="body">
            <div id="page-container">
                <div id="content-wrap"></div>
            </div>
            <Services></Services>
            <Footer></Footer>
        </div>
    )
}

export default Body