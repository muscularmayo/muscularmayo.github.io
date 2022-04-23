import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About.js';
import Contact from './Contact.js'
import Projects from './Projects.js'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
