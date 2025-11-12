import React from 'react'
import Hero from './Hero'
import Navbar from '../Navbar'
import FeaturesSection from './featuresSection'
import DestinationHighlights from './DestinationHighlights'
import HowItWorks from './HowItWorks'
import DestinationMap from './DestinationMap'
import CTASection from './CTASection'
import Footer from '../Footer'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <FeaturesSection />
        <DestinationHighlights />
        <HowItWorks />
        <DestinationMap />
        <CTASection />
        <Footer/>
    </>
  )
}

export default Homepage