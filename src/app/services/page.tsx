import React from 'react'
import ServiceSection from '../components/Services/services'
import ScopeSection from '../components/Services/scope'
import DealExperience from '../components/Services/DealExperience'
import FooterSection from '../components/home/Footer'

export default function page() {
  return (
    <div>
      <ServiceSection />
      <ScopeSection />
      <DealExperience />
      <FooterSection />
    </div>
  )
}
