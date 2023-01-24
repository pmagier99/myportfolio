import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Portfolio from "./components/Portfolio";
import Offers from "./components/Offers";
import About from "./components/About";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Intro />
        <Portfolio />
        <Offers />
        <About />
    </div>
  );
}

export default App;
