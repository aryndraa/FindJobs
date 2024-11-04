import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDekstop from "./components/templates/NavbarDekstop";
import NavbarMobile from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ScrollToTop from "./components/molecules/ScrollToTop";
import DetailsService from "./pages/DetailsService";
import CategoryFilter from "./components/molecules/filter/CategoryFilter";
import CategoryResults from "./pages/CategoryResults";
import CreateProject from "./pages/CreateProject";
import Project from "./pages/Project";
import DetailsProject from "./pages/DetailsProject";
import CreateService from "./pages/CreateService";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ConfirmAccount from "./pages/ConfirmAccount";
import FreelanceRegister from "./pages/Freelancer/FreelanceRegister";
import FreelanceLogin from "./pages/Freelancer/FreelanceLogin";
import CreateProfileFreelancer from "./pages/Freelancer/CreateProfileFreelancer";
import ConfirmAccountFreelance from "./pages/Freelancer/ConfirmAccountFreelance";
import ListFreelancer from "./pages/ListFreelancer";
import CardListFreelancer from "./components/molecules/List Freelancer/Card/CardListFreelancer";
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
        <Route
          path="/register/confirm-account-freelance"
          element={<ConfirmAccountFreelance />}
        />
        <Route path="/freelance-login" element={<FreelanceLogin />} />
        <Route
          path="/freelance-create-profile"
          element={<CreateProfileFreelancer />}
        />
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
