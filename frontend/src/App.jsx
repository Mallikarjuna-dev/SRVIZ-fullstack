import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCard from './components/FeaturedCard'
import Packages from './components/Packages'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Itinerary from './components/Itinerary'
import AddOnsAndContact from './components/AddOnsAndContact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LeadFormModal from './components/LeadFormModal'

export default function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Navbar onCTAClick={() => setShowForm(true)} />
      <main className='pt-16'>
        <Hero onPrimaryClick={() => setShowForm(true)} />
        <div className='max-w-6xl mx-auto px-4'>
          <FeaturedCard onEnquire={() => setShowForm(true)} />
          <Packages onEnquire={() => setShowForm(true)} />
          <WhyChooseUs />
          <HowItWorks />
          <Itinerary />
          <AddOnsAndContact onEnquire={() => setShowForm(true)} />
          <FAQ />
        </div>
      </main>

      <Footer />
      {showForm && <LeadFormModal onClose={() => setShowForm(false)} />}
    </>
  )
}
