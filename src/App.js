import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Portfolio from "./components/Portfolio";
import Offers from "./components/Offers";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Intro />
        <Portfolio />
        <Offers />
    </div>
  );
}

export default App;
