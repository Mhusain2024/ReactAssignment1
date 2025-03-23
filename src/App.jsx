import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import BannerSection from './components/BannerSection.jsx';
import FeaturesOverview from './components/FeaturesOverview.jsx';
import DigitalMarketingServicesSection from './components/DigitalMarketingServicesSection.jsx';
import TestimonialSections from './components/TestimonialSections.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import ContactUsSection from './components/ContactUsSection.jsx';
import ContactDetails from './components/ContactDetails.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/NavBar.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <div className="pt-16">
          <Navbar/>
        </div>
        <Routes> {/* Use Routes instead of Switch */}
          <Route
            path="/"
            element={
              <>
                <BannerSection/>
                <FeaturesOverview/>
                <DigitalMarketingServicesSection />
                <CaseStudies/>
                <TestimonialSections />
                <ContactUsSection/>
                <ContactDetails/>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<FeaturesOverview />} />
          <Route path="/blog" element={<DigitalMarketingServicesSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;