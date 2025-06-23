import React from 'react'

const TrustedBy = () => {
  return (
     <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-gray-600 text-sm uppercase tracking-wide mb-8">Trusted by</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
          <span className="text-gray-500 font-medium">LogoIpsum</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
          <span className="text-gray-500 font-medium">LogoIpsum</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
          <span className="text-gray-500 font-medium">LogoIpsum</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 rounded-full" />
          <span className="text-gray-500 font-medium">LogoIpsum</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TrustedBy