import React from 'react'
import AboutSection from '../components/AboutUs/AboutUs'
import MissionVisionSection from '../components/AboutUs/Services'
import CoreValues from '../components/AboutUs/CoreValues'
import CoreLegalCompetence from '../components/AboutUs/CoreLegal'
import OurTeam from '../components/AboutUs/OurTeam'
import Mandates from '../components/AboutUs/FoundationalMandates'
import FooterSection from '../components/home/Footer'


export default function page() {
  return (
    <div>
      <AboutSection />
      <MissionVisionSection />
      <CoreValues />
      <CoreLegalCompetence />
      <OurTeam />
      <Mandates/>
      <FooterSection />
    </div>
  )
}
