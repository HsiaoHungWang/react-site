import logo from './logo.svg';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';

//JSX
function App() {
  return (
    <Container>
      <Home />
      <About />
      <Contact />

  </Container>
  );
}

export default App;
