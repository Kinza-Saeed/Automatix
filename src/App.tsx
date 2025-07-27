import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@dotlottie/player-component";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import BottomSection from "./components/BottomSection";
import FaqSection from "./components/FaqSection";

function App() {
  const location = useLocation();

  useEffect(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
}, []);
  return (
    <>
    <div className="bg-black text-white" > 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<Route path="/contact" element={<><Contact /><FaqSection /><BottomSection /></>} />
        <Route path="/terms" element={<><Terms /><BottomSection /></>} />
        <Route path="*" element={<><NotFound /><BottomSection /></>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
