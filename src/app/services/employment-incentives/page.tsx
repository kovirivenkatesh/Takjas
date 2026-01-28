import React from 'react'


import FooterSection from '@/app/components/home/Footer'
import RegulatoryChallenge from '@/app/components/Services/employment-incentives/Challenge'
import GetInTouchSection from '@/app/components/Services/employment-incentives/GetinTouch'
import OtherServicesSection from '@/app/components/Services/employment-incentives/scopeOfPractice'
import ProofOfCompetenceSection from '@/app/components/Services/employment-incentives/ProofOfCompetence'
import OurSolutionsSection from '@/app/components/Services/employment-incentives/Solutions'


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
