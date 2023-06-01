import "./App.css";
import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <br />
        <br />
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
