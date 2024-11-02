import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDekstop from "./components/templates/NavbarDekstop";
import NavbarMobile from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ScrollToTop from "./components/molecules/ScrollToTop";
function App() {
  return (
   <Router>
    <ScrollToTop/>
    <NavbarMobile/>
    <NavbarDekstop/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
