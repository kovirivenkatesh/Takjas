import FooterSection from '@/app/components/home/Footer'
import RegulatoryChallenge from '@/app/components/Services/corporate-ma-venture-capital/Challenge'
import GetInTouchSection from '@/app/components/Services/corporate-ma-venture-capital/GetinTouch'
import OtherServicesSection from '@/app/components/Services/corporate-ma-venture-capital/OtherServices'
import ProofOfCompetenceSection from '@/app/components/Services/corporate-ma-venture-capital/ProofOfCompetence'
import OurSolutionsSection from '@/app/components/Services/corporate-ma-venture-capital/Solutions'
import React from 'react'

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
