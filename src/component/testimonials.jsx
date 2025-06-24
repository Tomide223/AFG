import React from 'react'

const testimonials = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <div className="testimonial-content">
                <div className="testimonial-image">
                    <div className="testimonial-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>
                <div className="testimonial-text">
                    <blockquote>"I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it."</blockquote>
                    <div className="testimonial-author">John Smith</div>
                    <div className="testimonial-role">Head of Data</div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default testimonials