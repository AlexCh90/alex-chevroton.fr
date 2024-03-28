import { useEffect, useState } from "react";
import "../assets/styles//header.scss";

const Header = () =>{
    const [header, setNavbar] = useState(false)
    const hideHeader = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 100) {
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
        <div id="accueil" className={header ? "container header hidden-header" : "container header shown-header"}>
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-inline">
                        <li className="list-inline-item"><i className="bi bi-linkedin"></i></li>
                        <li className="list-inline-item"><i className="bi bi-facebook"></i></li>
                        <li className="list-inline-item"><i className="bi bi-instagram"></i></li>
                    </ul>
                </div>
                <div className="col-md-3 offset-md-3"></div>
                <div className="col-md-4">
                    <p className="justify-content-end">
                        📞 (+33) 7.77.75.21.50 ✉️ contact@alex-chevroton.fr
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header