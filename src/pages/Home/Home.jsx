import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import WhatWeOffer from "./components/WhatWeOffer";
import TeachingKids from "./components/TeachingKids";
import InfoSlides from "./components/InfoSlides";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import LoginSignup from "./components/Login/LoginSignup";
import LoginSignupMobile from "./components/Login/LoginSignupMobile";

import SignUpProvider from "./contexts/SignUpStudentContext";
import SignUpProviderTeacher from "./contexts/SignUpTeacherContext";
export default function Home() {
  //  state to check  viewport width return boolean
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 426);

  useEffect(() => {
    // Function to update the state based on viewport width
    // Add event listener for window resize
    // Clean up the event listener when the component unmounts

    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 426);
    };
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <SignUpProviderTeacher>
      <SignUpProvider>
        {isSmallScreen ? <NavbarMobile /> : <Navbar />}

        <Header />
        <WhatWeOffer />
        <TeachingKids />
        <InfoSlides />
        <CTA />
        <Footer />

        {isSmallScreen ? <LoginSignupMobile /> : <LoginSignup />}
      </SignUpProvider>
    </SignUpProviderTeacher>
  );
}
