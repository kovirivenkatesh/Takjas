import React from 'react'


import FooterSection from '@/app/components/home/Footer'
import RegulatoryChallenge from '@/app/components/Services/finance-restructuring/Challenge'
import GetInTouchSection from '@/app/components/Services/finance-restructuring/GetinTouch'
import OtherServicesSection from '@/app/components/Services/finance-restructuring/scopeOfPractice'
import ProofOfCompetenceSection from '@/app/components/Services/finance-restructuring/ProofOfCompetence'
import OurSolutionsSection from '@/app/components/Services/finance-restructuring/Solutions'


export default function page() {
  return (
    <div className='bg-[#F5F5F5]'>
      <GetInTouchSection/>
      <RegulatoryChallenge />
      <OurSolutionsSection />
      <ProofOfCompetenceSection />
      <OtherServicesSection />
      <FooterSection />
    </div>
  )
}
