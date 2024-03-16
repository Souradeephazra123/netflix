import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderForMobile from "./components/HeaderForMobile";
function App() {
  return (
    <div className="App font-sans">
      <Header />
      <HeaderForMobile />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// 8894115041
