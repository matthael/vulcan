import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import NewProj from './components/Pages/NewProj';
import Projects from './components/Pages/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Container customClass="minH">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/projs" element={<Projects />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/cont" element={<Contact />} />
                <Route exact path="/newproj" element={<NewProj />} />    
              </Routes>
            </Container>
          <Footer />
        </Router> 
    </div>
  );
}

export default App;
