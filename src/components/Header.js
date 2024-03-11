import { useEffect, useState } from "react";
import "../assets/styles//header.scss";

const Header = () =>{
    const [header, setNavbar] = useState(false)
    const hideHeader = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        hideHeader()
        // adding the event when scroll change background
        window.addEventListener("scroll", hideHeader)
    })

    return(
        <div id="accueil" className={header ? " container header hidden-header" : "container header shown-header"}>
            <div className="container row">
                <div className="col-1 align-items-start">
                    LinkedIn
                </div>
                <div className="col-1 align-items-start">
                    Facebook
                </div>
                <div className="col-1 align-items-start">
                    Instagram
                </div>
                <div className="col-5 align-items-start">
                </div>
                <div className="col-2 align-items-end">
                    (+33) 7 77 75 21 50
                </div>
                <div className="col-2 align-items-end">
                    contact@alex-chevroton.fr
                </div>
            </div>
        </div>
    )
}

export default Header