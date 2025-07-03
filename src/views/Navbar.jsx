

const Navbar = () => {
    return (
        <div class="fixed top-2 left-1/2 transform -translate-x-1/2 z-40">
            <nav class="bg-white/15 backdrop-blur-xl border border-white/25 rounded-full px-6 py-3">
                <ul class="flex items-center space-x-8 text-sm font-medium">
                    <li>
                        <a href="#Benefits" class=" font-poppins font-bold text-12px text-black hover:text-gray-400 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10">
                            Benefits
                        </a>
                    </li>
                    <li>
                        <a href="#Specifications" class="text-black font-poppins font-bold text-12px hover:text-gray-400 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10">
                            Specifications
                        </a>
                    </li>
                    <li>
                        <a href="#How-To" class="text-black font-poppins font-bold text-12px hover:text-gray-400 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10">
                            How-To
                        </a>
                    </li>
                    <li>
                        <a href="#contact-Us" class="text-black font-poppins font-bold text-12px hover:text-gray-400 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10">
                            Contact-Us
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar