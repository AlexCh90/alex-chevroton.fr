import "../assets/styles/body.scss"
import Footer from "../components/Footer";
import Services from "../components/Services";
import Competences from "../components/Competences";

function Body (){
    return(
        <div className="body">
            <div id="page-container"></div>
            <Services></Services>
            <Competences></Competences>
            <Footer></Footer>
        </div>
    )
}

export default Body