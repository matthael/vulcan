import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import NewProj from "./components/Pages/NewProj";
import Projects from "./components/Pages/Projects";
import Project from "./components/Pages/Project";
import Service from "./components/Pages/Service";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container customClass="minH">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projs" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/cont" element={<Contact />} />
            <Route path="/newproj" element={<NewProj />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/services/:id" element={<Service />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
