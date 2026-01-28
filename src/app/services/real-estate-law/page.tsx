import React from 'react'


import FooterSection from '@/app/components/home/Footer'
import RegulatoryChallenge from '@/app/components/Services/real-estate-law/Challenge'
import GetInTouchSection from '@/app/components/Services/real-estate-law/GetinTouch'
import OtherServicesSection from '@/app/components/Services/real-estate-law/OtherServices'
import ProofOfCompetenceSection from '@/app/components/Services/real-estate-law/ProofOfCompetence'
import OurSolutionsSection from '@/app/components/Services/real-estate-law/Solutions'


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
