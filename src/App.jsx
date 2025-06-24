import BenefitContainer from './component/benefitContainer'
import BigPicture from './component/BigPicture'
import EfficencyHero from './component/EfficiencyHero'
import Navbar from './component/Navbar'
import TrustedBy from './component/TrustedBy'
import MapSuccess from './component/MapSuccess'
import WhyChooseArea from './component/WhyChooseArea'
import TestmonialCard from './component/TestimonialCard'
function App() {


  return (
    <>
      <Navbar />
      <EfficencyHero />
      <TrustedBy />
      <BenefitContainer />
      <BigPicture />
      <WhyChooseArea/>
      <TestmonialCard/>
      <MapSuccess/> 
    </>
  )
}

export default App
