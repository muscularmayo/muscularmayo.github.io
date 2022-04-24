import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './About.js';
import Contact from './Contact.js'
import Projects from './Projects.js'
import Header from './Header.js'
import Footer from './Footer.js'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/#about" element={<About />} />
        <Route path="/#projects" element={<Projects />} />
        <Route path="/#contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
