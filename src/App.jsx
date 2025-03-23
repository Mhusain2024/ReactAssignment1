import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import BannerSection from './components/BannerSection';
import FeaturesOverview from './components/FeaturesOverview';
import DigitalMarketingServicesSection from './components/DigitalMarketingServicesSection';
import TestimonialSections from './components/TestimonialSections';
import CaseStudies from './components/CaseStudies';
import ContactUsSection from './components/ContactUsSection';
import ContactDetails from './components/ContactDetails';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

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