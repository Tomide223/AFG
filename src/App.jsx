import { useState } from 'react'
import BenefitContainer from './component/benefitContainer'
import BigPicture from './component/BigPicture'
import WhyChoose from './component/whyChoose'
import Hero from './component/hero'
import Testmonials from './component/testmonials'
import SuccessMap from './component/successMap'

function App() {


  return (
    <>
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
