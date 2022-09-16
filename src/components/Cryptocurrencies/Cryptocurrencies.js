import React, { useState, useEffect } from 'react'
import CryptoCard from './CryptoCard'

import Loader from '../Loader/Loader'

import { CloseOutlined } from '@ant-design/icons'
import './Cryptocurrencies.css'

import { useGetCryptosListQuery } from '../../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100
  
  const { data: cryptosList, isFetching} = useGetCryptosListQuery(count)

  const pages = [1,2,3,4,5]
  const [currPage, setCurrPage] = useState(1)
  
  const [searchTerm, setSearchTerm] = useState('')
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins?.filter(coin => coin.name.toLocaleLowerCase().includes(searchTerm) || coin.symbol.toLocaleLowerCase().includes(searchTerm))
    setCryptos(filteredData)
  }, [searchTerm, cryptosList?.data?.coins])

  useEffect(() => {
    setCurrPage(currPage)
    setCryptos(cryptosList?.data?.coins.slice((currPage-1)*20, currPage*20))
  }, [cryptosList, currPage])

  if (isFetching) return <Loader />

  return (
    <div className="currencies-box">
      {!simplified &&
        <div className="search-box">
            <input 
              type="text" 
              placeholder='Search cryptos' 
              id="search-bar" 
              onChange={e => setSearchTerm(e.target.value.toLocaleLowerCase())}
            />
            <button 
              className="clear-btn"
              onClick={() => {
                setSearchTerm('')
                document.querySelector('#search-bar').value = ''
                setCurrPage(1)
                setCryptos(cryptosList?.data?.coins.slice((currPage-1)*20, currPage*20))
              }}
            >
              <CloseOutlined style={{fontSize: '250%'}}/>
            </button>
          </div>
      }

      {!simplified && 
        <div className="pages-box">
          {pages.map(item => (
              <button 
                onClick={() => setCurrPage(item)} 
                className={item === currPage ? 'btn-page active' : 'btn-page'} 
              >
                {item}
              </button>
            )
          )}
        </div>
      }
      
      <div className="crypto-card-box">
        {cryptos?.map((currency, index) => (
          <CryptoCard
            uuid={currency.uuid}
            rank={currency.rank}
            name={currency.name}
            iconUrl={currency.iconUrl}
            symbol={currency.symbol}
            price={currency.price}
            marketCap={currency.marketCap}
            change={currency.change}
            id={currency.uuid}
            key={index}
          />
        ))}
      </div>

      {!simplified && 
        <div className="pages-box">
        {pages.map((item, ind) => (
            <button 
              onClick={() => setCurrPage(item)} 
              className={item === currPage ? 'btn-page active' : 'btn-page'}
              key={ind}
            >
              {item}
            </button>
          )
        )}
        </div>
      }

    </div>
  )
}

export default Cryptocurrencies

