import "../assets/styles/accueil.scss"
import chat1 from "../assets/images/chat1.jpg"
import chat2 from "../assets/images/chat2.jpg"

function Accueil (){
    return (
        <section id="carouselExampleSlidesOnly" className="carousel slide fondentete" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={chat1} className="carouselimage" alt="chat1"/>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src={chat2} className="carouselimage" alt="chat2"/>
                </div>
            </div>
        </section>
        )
}

export default Accueil