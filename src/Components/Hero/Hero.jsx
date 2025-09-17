import React from 'react'
import './Hero.css'

import mode_video from '../Assets/Mode_video.mp4';

const Hero = () => {
  return (
    <div className="hero">
       <section className="hero">
      <video
        className="hero-video"
        src={mode_video}
        autoPlay
        muted
        loop
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Redefining Elegance</h1>
        <p>Style, elegance, and your perfect look.</p>
        <button className="hero-button">Shop Now</button>
      </div>
    </section>

    </div>
  )
}

export default Hero
