import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import NewProj from './components/Pages/NewProj';

import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
              <Link to="/"> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/cont"> Contact </Link>
              <Link to="/newproj"> New Project </Link>
            </div>
            <Container customClass="minH">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/cont" element={<Contact />} />
                <Route exact path="/newproj" element={<NewProj />} />    
              </Routes>
            </Container>
          <p> Footer </p>
        </Router> 
    </div>
  );
}

export default App;
