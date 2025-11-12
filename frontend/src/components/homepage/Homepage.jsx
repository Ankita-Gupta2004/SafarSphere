import React from 'react'
import Hero from './Hero'
import Navbar from '../Navbar'
import FeaturesSection from './featuresSection'
import DestinationHighlights from './DestinationHighlights'
import HowItWorks from './HowItWorks'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <FeaturesSection />
        <DestinationHighlights />
        <HowItWorks />
    </>
  )
}

export default Homepage