import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Shipper from './Pages/Shipper';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container } from 'react-bootstrap';
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
         <Link to="/shipper">Shipper</Link> | 
       </nav>
     </header>
      <Routes>
        {/* http://localhost:3000/ */}
        <Route path="/" element={ <Home />} />
          {/* http://localhost:3000/about */}
        <Route path="/about" element={<About />} />
          {/* http://localhost:3000/contact */}
        <Route path="/contact" element={<Contact />} /> 
        {/* http://localhost:3000/shipper */}
        <Route path="/shipper" element={<Shipper />} />
      </Routes>
  </Container>
  );
}

export default App;
