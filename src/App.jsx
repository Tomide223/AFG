import BenefitContainer from './component/benefitContainer'
import BigPicture from './component/BigPicture'
import EfficencyHero from './component/EfficiencyHero'
import Navbar from './component/Navbar'
import TrustedBy from './component/TrustedBy'
import MapSuccess from './component/MapSuccess'
import WhyChooseArea from './component/WhyChooseArea'
import TestmonialCard from './component/TestimonialCard'
import Navbarmock from './component/navbarmock'
import Footer from './component/Footer'
import ConnectWithUs from './component/ConnectWithUs'
function App() {


  return (
    <>
      <Navbar />
      <Navbarmock/>
      <EfficencyHero />
      <TrustedBy />
      <BenefitContainer />
      <BigPicture />
      <WhyChooseArea/>
      <TestmonialCard/>
      <MapSuccess/>
      <ConnectWithUs/>
      <Footer/>
    </>
  )
}

export default App
