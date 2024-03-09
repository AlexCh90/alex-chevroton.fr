import { useEffect, useState } from "react";
import "../assets/styles/banner.scss"

const  Banner = () => {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })
    
    return(
        <nav className={navbar ? "navbar ontop navbar-expand-lg sticky-top" : "navbar notontop bg-light navbar-expand-lg sticky-top"}>
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
                                <a className="nav-link active" href="#">🏠</a>
                                {/*<Link to="" className="nav-link active" aria-current="page">Page 1</Link>*/}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Services</a>
                                {/*<Link to="" className="nav-link active" aria-current="page">Page 2</Link>*/}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Compétences</a>
                                {/*<Link to="" className="nav-link active" aria-current="page">Page 2</Link>*/}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Portefolio</a>
                                {/*<Link to="" className="nav-link active" aria-current="page">Page 2</Link>*/}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Tarifs</a>
                                {/*<Link to="" className="nav-link active" aria-current="page">Page 2</Link>*/}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">A propos</a>
                                {/*<Link to="" className="nav-link active" aria-current="page">Page 2</Link>*/}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact</a>
                                {/*<Link to="" className="nav-link active" aria-current="page">Page 2</Link>*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Banner