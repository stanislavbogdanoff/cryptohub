import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/cryptohub.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-box">

      <div className='hero-img-box'>
        <div className="hero-img-dec">
          <div className="hero-img-border">
            <div className="hero-img">
            </div>
            <img src={logo} alt="logo" className="hero-logo" />
          </div>
        </div>
      </div>
      <div className="hero-content-box">
        <div className="hero-content">
          <h1>
            Welcome to CryptoHub,
          </h1>
          <p>
            A resource for beginner crypto traders. Monitor current exchagne rates, check historic prices for fundamental analysis, read about exchanges and get fresh crypto news.
          </p>
          <div className="hero-btns">
            <button className='btn-pink-solid'><Link to='/currencies' >Get started</Link></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero