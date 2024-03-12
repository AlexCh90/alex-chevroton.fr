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
        <div id="accueil" className={header ? "header hidden-header" : "header shown-header"}>
            <div className="row align-items-center">
                <div className="col-xxl-8 col-md-7 align-items-center">
                    LinkedIn Facebook Instagram
                </div>
                <div className="col-xxl-4 col-md-5 align-items-end">
                    📞 (+33) 7.77.75.21.50 ✉️ contact@alex-chevroton.fr
                </div>
            </div>
        </div>
    )
}

export default Header