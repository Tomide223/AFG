import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';

const TrustedBy = () => {
  return (
     <section className=" py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-gray-600 text-sm uppercase tracking-wide mb-8">Trusted by</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium"><img src={logo1} alt="logo1" /></span>
        </div>
         <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium"><img src={logo2} alt="logo2" /></span>
        </div>
         <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium"><img src={logo3} alt="logo3" /></span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium"><img src={logo4} alt="logo4" /></span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium"><img src={logo5} alt="logo5" /></span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 font-medium"><img src={logo6} alt="logo6" /></span>
        </div>
        </div>
      </div>
  </section>
  )
}

export default TrustedBy