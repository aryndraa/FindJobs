import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDekstop from "./components/templates/NavbarDekstop";
import NavbarMobile from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service/Service";
import ScrollToTop from "./components/molecules/ScrollToTop";
import DetailsService from "./pages/Service/DetailsService";
import CategoryResults from "./pages/CategoryResults";
import CreateProject from "./pages/Project/CreateProject";
import Project from "./pages/Project/Project";
import DetailsProject from "./pages/Project/DetailsProject";
import CreateService from "./pages/Service/CreateService";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import ConfirmAccount from "./pages/Auth/ConfirmAccount";
import FreelanceRegister from "./pages/Auth/FreelanceRegister";
import FreelanceLogin from "./pages/Auth/FreelanceLogin";
import CreateProfileFreelancer from "./pages/Freelancer/CreateProfileFreelancer";
import ConfirmAccountFreelance from "./pages/Freelancer/ConfirmAccountFreelance";
import ListFreelancer from "./pages/Freelancer/ListFreelancer";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarMobile />
      <NavbarDekstop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up/confirm-account" element={<ConfirmAccount />} />
        <Route path="/freelance-register" element={<FreelanceRegister />} />
        <Route path="/register/confirm-account-freelance" element={<ConfirmAccountFreelance />} />
        <Route path="/freelance-login" element={<FreelanceLogin />} />
        <Route path="/freelance-create-profile" element={<CreateProfileFreelancer />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/project-category" element={<CategoryResults />} />
        <Route path="/project/create-project" element={<CreateProject />} />
        <Route path="/project/details-project" element={<DetailsProject />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/details-service" element={<DetailsService />} />
        <Route path="/service/service-category" element={<CategoryResults />} />
        <Route path="/service/create-service" element={<CreateService />} />
        <Route path="/list-freelancer" element={<ListFreelancer />} />
        <Route path="/list-freelancer/freelancer-category" element={<CategoryResults />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
