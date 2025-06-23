import { useState } from 'react'
import BenefitContainer from './component/benefitContainer'
import BigPicture from './component/BigPicture'
import WhyChoose from './component/whyChoose'
import Hero from './component/hero'
import Testmonials from './component/testmonials'
import SuccessMap from './component/successMap'
import EfficencyHero from './component/EfficiencyHero'
import Navbar from './component/Navbar'
import TrustedBy from './component/TrustedBy'
function App() {


  return (
    <>
      <Navbar />
      <EfficencyHero />
      <TrustedBy />
      <BenefitContainer />
      <BigPicture />
      <WhyChoose/>
      <Hero/>
      <Testmonials/>
      <SuccessMap/>
    </>
  )
}

export default App
