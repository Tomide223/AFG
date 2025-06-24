import footericon from '../assets/footericon.png';
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-16">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#" 
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                Benefits
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                Specifications
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              >
                How-to
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between items-end">
            <div className="text-sm text-gray-600 font-mono">
                <img src={footericon} alt="footerguy" />
              © Area. 2025
            </div>
          <div className="text-sm text-gray-600 font-mono">
            All Rights Reserved
          </div>
        </div>
        </div>
    </footer>
  );
}
export default Footer