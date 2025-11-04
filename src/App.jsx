import React from "react";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import EngagementPage from "./pages/EngagementPage";
import TechnicalPage from "./pages/TechnicalPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import CareersPage from "./pages/CareersPage";
import ItPage from "./pages/ItPage";
import InternshipPage from "./pages/InternshipPage";
import NonItPage from "./pages/NonitPage";
import ApplyIt from "./pages/Applyit";
import ApplyNonIt from "./pages/ApplyNonIt";
import ApplyInternShip from "./pages/ApplyInternShip";

function App() {
  return (
    <Router>
        <Navbar/>
       <Routes>
         <Route path="/"element={<Home />}/>
         <Route path="/services"element={<ServicePage/>}/>
         <Route path="/about"element={<AboutPage/>}/>
         <Route path="/engagement"element={<EngagementPage/>}/>
         <Route path="/technicalstack"element={<TechnicalPage/>}/>
         <Route path="/portfolio"element={<PortfolioPage/>}/>
         <Route path="/portfolio/:pageId"element={<PortfolioPage/>}/>
         <Route path="/contact"element={<ContactPage/>}/>
         <Route path="/blog"element={<BlogPage/>}/>
         <Route path="/careers" element={<CareersPage />} /> {/* default page */}
        <Route path="/careers/:filter" element={<CareersPage />} />
         <Route path="/it"element={<ItPage/>}/>
         <Route path="/nonit"element={<NonItPage/>}/>
         <Route path="/internship"element={<InternshipPage/>}/>
         <Route path="/apply/it" element={<ApplyIt />} />
         <Route path="/apply/nonit" element={<ApplyNonIt />} />
         <Route path="/apply/internship" element={<ApplyInternShip/>} />

       </Routes>
       <Footer/>
       </Router>
  );
}

export default App;
