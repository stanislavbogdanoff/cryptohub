import React from 'react';
import { Link } from 'react-router-dom'

import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Globals from '../components/Globals/Globals'
import Cryptocurrencies from '../components/Cryptocurrencies/Cryptocurrencies';
import Exchanges from '../components/Exchanges/Exchanges';
import News from '../components/News/News';
import MainCharts from '../components/MainCharts/MainCharts';


const HomePage = () => {

  return (
    <div className='home-page'>
      <Hero />
      <Features />
      {/* <MainCharts /> */}
      <Globals />
      <section>
        <div className="title">
          <h4>Top 5 Exchanges</h4>
          <Link to='/exchanges'>More</Link>
        </div>
        <Exchanges simplified />
      </section>
      <section>
        <div className="title">
          <h4>Top 10 Cryptos</h4>
          <Link to='/currencies'>More</Link>
        </div>
        <Cryptocurrencies simplified={true} />
      </section>
      <section>
        <div className="title">
          <h4>Freshest News</h4>
          <Link to='/news'>More</Link>
        </div>
        <News simplified />
      </section>
    </div>
  )
}

export default HomePage