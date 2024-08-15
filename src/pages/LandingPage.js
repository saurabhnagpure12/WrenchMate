// LandingPage.js
import React from 'react';
import TopComponent from './TopComponent';
import Services from './Services';
import About from './about';
import ServiceFeatures from './servicefeatures';
import Scan from './Scan';
import Contact from './contact';
import Footer from './Footer';
import './LandingPage.css'
import LeadershipTeam from './LeadershipTeam';
const LandingPage = () => {
    return (
    
        <div className="lan">
       
        <TopComponent />
        <Services id="services" />
        <About id="about" />
        <ServiceFeatures />
        <LeadershipTeam />
        <Scan />
        <Contact id="contact" />
        <Footer />
    </div>
    );

};

export default LandingPage;
