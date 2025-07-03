import BenefitContainer from './views/BenefitConatiner'
import BigPicture from "./views/BigPicture";
import EfficencyHero from "./views/EfficiencyHero";
import Navbar from "./views/Navbar";
import TrustedBy from "./views/TrustedBy";
import MapSuccess from "./views/MapSuccess";
import WhyChooseArea from "./views/WhyChooseArea";
import TestmonialCard from "./views/TestimonialCard";
import Navbarmock from "./views/navbarmock";
import Footer from "./views/Footer";
import ConnectWithUs from "./views/ConnectWithUs";
function App() {
  return (
    <>
      <Navbar />
      <Navbarmock />
      <EfficencyHero />
      <TrustedBy />
      <BenefitContainer />
      <BigPicture />
      <WhyChooseArea />
      <TestmonialCard />
      <MapSuccess />
      <ConnectWithUs />
      <Footer />
    </>
  );
}

export default App;
