import "../assets/styles/main.scss"
import Services from "../components/Services";
import Skills from "../components/Skills";
import Pricing from "../components/Pricing";
import About from "../components/About";

function Main (){
    return(
        <div>
            <Services></Services>
            <Skills></Skills>
            <Pricing></Pricing>
            <About></About>
        </div>
    )
}

export default Main