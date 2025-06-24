import BenefitContainer from './component/benefitContainer'
import BigPicture from './component/BigPicture'
import WhyChoose from './component/whyChoose'
import Hero from './component/hero'
import Testmonials from './component/testimonials'
import SuccessMap from './component/successMap'
import EfficencyHero from './component/EfficiencyHero'
import Navbar from './component/Navbar'
import TrustedBy from './component/TrustedBy'
import '@fontsource/poppins';
import Navbarmock from './component/navbarmock'
import ConnectWithUs from './component/ConnectWithUs'
import Footer from './component/Footer'
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
    </>
  )
}

export default App
