import './assets/styles/App.scss';
import Header from "./components/Header";
import Accueil from  "./pages/Accueil";
import Banner from "./components/Banner";
import Body from "./pages/Body";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Accueil></Accueil>
      <Banner></Banner>
      <Body></Body>
    </div>
  );
}

export default App;