import logo from './logo.svg';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';

//JSX
function App() {
  return (
    <Container>
     <header>
       <nav>
         <Link to="/">Home</Link> | 
         <Link to="/about">About</Link> |      
         <Link to="/contact">Contact</Link> | 
       </nav>
     </header>

      <Routes>
        {/* http://localhost:3000/ */}
        <Route path="/" element={ <Home />} />
          {/* http://localhost:3000/about */}
        <Route path="/about" element={<About />} />
          {/* http://localhost:3000/contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </Container>
  );
}

export default App;
