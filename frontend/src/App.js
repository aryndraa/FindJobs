import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDekstop from "./components/templates/NavbarDekstop";
import NavbarMobile from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ScrollToTop from "./components/molecules/ScrollToTop";
import DetailsService from "./pages/DetailsService";
import CategoryFilter from "./components/molecules/CategoryFilter";
import CategoryResults from "./pages/CategoryResults";
import CreateProject from "./pages/CreateProject";
import Project from "./pages/Project";
import DetailsProject from "./pages/DetailsProject";
import CreateService from "./pages/CreateService";
import Register from "./pages/Register";
import ConfirmAccount from "./pages/ConfirmAccount";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarMobile />
      <NavbarDekstop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/confirm-account" element={<ConfirmAccount />} />
        <Route path="/project/details-project" element={<DetailsProject />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/details-service" element={<DetailsService />} />
        <Route path="/service/service-category" element={<CategoryResults />} />
        <Route path="/project/project-category" element={<CategoryResults />} />
        <Route path="/project/create-project" element={<CreateProject />} />
        <Route path="/service/create-service" element={<CreateService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
