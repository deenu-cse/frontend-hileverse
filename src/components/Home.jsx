import React from 'react'
import Navbar from './Nav'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import Footer from './Footer'
import TestimonialsSection from './TestimonialsSection'
import HowItWorksSection from './HowItWorksSection'
import ContactSection from './ContactSection'
import Demo from './Demo'

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeaturesSection/>
    <Demo/>
    <HowItWorksSection/>
    <TestimonialsSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}
