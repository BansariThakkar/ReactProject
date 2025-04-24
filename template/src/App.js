import React from "react";
import './App.css'

import HeroSection from "./Practice/HeroSection";
import Navbar from "./Practice/Navbar";
import ServicesSection from "./Practice/ServicesSection"
import AboutSection from "./Practice/AboutSection";
import Testimonials from "./Practice/Testimonial";
import CardSection from "./Practice/CardSection";
import WayOfBuilding from "./Practice/WayOfBuilding";
import DesignApproach from "./Practice/DesignApproach";
import TechStack from "./Practice/TechStack";
import DevelopmentProcess from "./Practice/DevelopmentProcess";
import FeaturedResources from "./Practice/FeaturedResources";
import CallToActionAndFooter from "./Practice/CallToActionAndFooter";

function App(){
  return(
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <Testimonials/>
      <CardSection/>
      <WayOfBuilding/>
      <DesignApproach/>
      <TechStack/>
      <DevelopmentProcess/>
      <FeaturedResources/>
      <CallToActionAndFooter/>
    </div>
  )
}

export default App