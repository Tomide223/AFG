import React from 'react'

const whyChoose = () => {
  return (
<section className="why-choose" id="benefits">
        <div className="container">
            <div className="comparison-table">
                <div className="comparison-card">
                    <h3>Area</h3>
                    <ul className="feature-list">
                        <li>Ultra-fast browsing</li>
                        <li>Advanced AI insights</li>
                        <li>Seamless integration</li>
                        <li>Advanced AI insights</li>
                        <li>Ultra-fast browsing</li>
                    </ul>
                </div>
                
                <div className="comparison-card featured">
                    <h3>WebSurge</h3>
                    <ul className="feature-list">
                        <li>Fast browsing</li>
                        <li>Basic AI recommendations</li>
                        <li>Restricts customization</li>
                        <li className="unavailable">Basic AI insights</li>
                        <li>Fast browsing</li>
                    </ul>
                </div>
                
                <div className="comparison-card">
                    <h3>HyperView</h3>
                    <ul className="feature-list">
                        <li className="unavailable">Moderate speeds</li>
                        <li className="unavailable">No AI assistance</li>
                        <li className="unavailable">Steep learning curve</li>
                        <li className="unavailable">No AI assistance</li>
                        <li className="unavailable">Moderate speeds</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
  )
}

export default whyChoose    
