import React from 'react'


import FooterSection from '@/app/components/home/Footer'
import RegulatoryChallenge from '@/app/components/Services/dispute-resolution/Challenge'
import GetInTouchSection from '@/app/components/Services/dispute-resolution/GetinTouch'
import OtherServicesSection from '@/app/components/Services/dispute-resolution/OtherServices'
import ProofOfCompetenceSection from '@/app/components/Services/dispute-resolution/ProofOfCompetence'
import OurSolutionsSection from '@/app/components/Services/dispute-resolution/Solutions'


export default function page() {
  return (
    <div>
      <GetInTouchSection/>
      <RegulatoryChallenge />
      <OurSolutionsSection />
      <ProofOfCompetenceSection />
      <OtherServicesSection />
      <FooterSection />
    </div>
  )
}
