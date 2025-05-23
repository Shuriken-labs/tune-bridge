import "./App.css";
import Navbar from "./component/header";
import Hero from "./component/hero";
import heroimg from "./assets/Property 1=Desktop - 2.png";
import StepByStepProcess from "./component/process";

function App() {
  return (
    <div>
      <div
        className="flex flex-col text-amber-50"
        style={{
          backgroundImage: `url(${heroimg})`
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <StepByStepProcess />
    </div>
  );
}

export default App;
