import "./App.css";
import Menu from "./Components/Menu/Menu";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";
import Service from "./Components/Service/Service";
import Work from "./Components/Work/Work";
import Review from "./Components/Review/Review";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Resume></Resume>
      <Service></Service>
      <Work></Work>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;