import Navbar from "./Navbar"; 
import Home from "./Home";
import AboutMe from "./AboutMe";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;