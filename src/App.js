import './assets/styles/App.scss';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Carousel from  "./components/Carousel";
import Body from "./pages/Body";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Carousel></Carousel>
      <Body></Body>
    </div>
  );
}

export default App;
