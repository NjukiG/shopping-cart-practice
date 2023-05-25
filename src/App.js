import "./App.css";
import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
