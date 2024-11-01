import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDekstop from "./components/templates/NavbarDekstop";
import NavbarMobile from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Home from "./pages/Home";
function App() {
  return (
   <Router>
    <NavbarMobile/>
    <NavbarDekstop/>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
