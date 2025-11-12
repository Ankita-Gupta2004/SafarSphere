import React from 'react'
import Hero from './Hero'
import Navbar from '../Navbar'
import FeaturesSection from './featuresSection'
import DestinationHighlights from './DestinationHighlights'

const Homepage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <FeaturesSection />
        <DestinationHighlights />
    </>
  )
}

export default Homepage