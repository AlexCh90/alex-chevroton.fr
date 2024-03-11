import { useEffect, useState } from "react";
import "../assets/styles/banner.scss"
import logofonce from "../assets/images/logofonce.png"
import logoclair from "../assets/images/logoclair.png"

const  Banner = () => {
    const [navbar, setNavbar] = useState(false)
    const [logo, setLogo] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
            setLogo(true)
        } else {
            setNavbar(false)
            setLogo(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    
    return(
        <nav className={navbar ? "navbar ontop navbar-expand-lg sticky-top" : "navbar notontop navbar-expand-lg sticky-top"}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart" aria-controls="offcanvasStart" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasStart" aria-labelledby="offcanvasStartLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasStartLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 nav-fill">
                            <li className="nav-item">
                                <a className="nav-link active navbar-brand" href="#accueil"><img src={logo ? logoclair : logofonce} alt="logo" height="40" width="40"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#competences">Compétences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#portefolio">Portefolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#tarifs">Tarifs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#apropos">A propos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Banner