import FooterSection from '@/app/components/home/Footer'
import RegulatoryChallenge from '@/app/components/Services/compliance-risk-management/Challenge'
import GetInTouchSection from '@/app/components/Services/compliance-risk-management/GetinTouch'
import ProofOfCompetenceSection from '@/app/components/Services/compliance-risk-management/ProofOfCompetence'
import ScopeOfPracticeSection from '@/app/components/Services/compliance-risk-management/scopeOfPractice'


import OurSolutionsSection from '@/app/components/Services/compliance-risk-management/Solutions'
import React from 'react'

export default function page() {
  return (
    <div className='bg-[#F5F5F5]'>
      <GetInTouchSection/>
      <RegulatoryChallenge />
      <OurSolutionsSection />
      <ProofOfCompetenceSection />
      <ScopeOfPracticeSection />
      <FooterSection />
    </div>
  )
}
