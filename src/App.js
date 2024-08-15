import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./pages/Navbar";
import TermsOfService from "./pages/term";
import PrivacyPolicy from "./pages/privacy";

const App = () => {

  return (<>
<Navbar/>
    <Routes>   
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<LandingPage />} />
      <Route path="/term" element={<TermsOfService/>} />
       <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
    </>
  );
};

export default App;
