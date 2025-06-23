import React from 'react'

const successMap = () => {
  return (

    <section className="success-map">
        <div className="container">
            <div className="section-title">
                <h2>Map Your Success</h2>
                <a href="#discover" className="btn">Discover More</a>
            </div>
            
            <div className="success-steps">
                <div className="step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                        <h3>Get Started</h3>
                        <p>With our intuitive setup, you're up and running in minutes.</p>
                    </div>
                </div>
                
                <div className="step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                        <h3>Customize and Configure</h3>
                        <p>Adapt Area to your specific requirements and preferences.</p>
                    </div>
                </div>
                
                <div className="step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                        <h3>Grow Your Business</h3>
                        <p>Make informed decisions to exceed your goals.</p>
                    </div>
                </div>
            </div>
            
            <div className="landscape-image"></div>
        </div>
    </section>   
  )
}

export default successMap