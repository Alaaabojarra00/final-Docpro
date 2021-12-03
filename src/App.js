import Client from "./components/client-section/Client";
import Banner from "./components/banner-section/banner";
import Navbar from "./components/Navbars/Navbar";
import Feature from "./components/feature-section/Feature";
import About from "./components/about-section/About";
import Process from "./components/proceess-section/Process";
import Test from './components/testimonial-section/Test'
import Team from "./components/team-section/Team";
import Agent from "./components/agent-section/Agent";
import Switcher from "./components/switcher/Switcher";
import Scroll from "./components/scroll/Scroll";


function App() {
  return (
    <>
    <Navbar/>
    <Banner />
    <Scroll />
    <Switcher />
    <Client />
    <Feature />
    <About />
    <Process />
    <Test />
    <Team />
    <Agent />
    </>
  );
}

export default App;
