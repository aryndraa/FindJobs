import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDekstop from "./components/templates/NavbarDekstop";
import NavbarMobile from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
function App() {
  return (
   <Router>
    <NavbarMobile/>
    <NavbarDekstop/>
    <Routes>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
