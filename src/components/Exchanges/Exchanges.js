import React, { useState, useEffect } from 'react'
import Accordion from './Accordion'
import Loader from '../Loader/Loader'

import { useGetExchangesQuery } from '../../services/cryptoExchangesApi'

import { IoMdClose } from 'react-icons/io'
import './Exchanges.css'

const Exchanges = ({ simplified }) => {
  const count = simplified ? 5 : 20
  const [searchTerm, setSearchTerm] = useState('')
  const [exchanges, setExchanges] = useState()
  const {data: exchangesList, isFetching} = useGetExchangesQuery(count)
  
  useEffect(() => {
    setExchanges(exchangesList)
    const filteredData = exchangesList?.filter(exch => exch.id.includes(searchTerm))
    setExchanges(filteredData)
  }, [exchangesList, searchTerm])

  if (isFetching) return <Loader />

  return (
    <>
      {!simplified &&
        <section className="search-box">
          <div className="container">
            <div className="wrapper hor">
              <input 
                type="text" 
                placeholder='Search exchanges...' 
                className="search-bar" 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value.toLocaleLowerCase())}
              />
              <button 
                className="clear-btn"
                onClick={() => {
                  setSearchTerm('')
                }}
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        </section>
      }
      { 
        exchanges && 
          <section>
            <div className="container">
              <div className="wrapper exchanges_wrapper">
                {
                  exchanges?.slice(0, count).map((item, ind) => {
                    return (
                      <Accordion rank={item.trust_score_rank} title={item.name} content={item} key={ind}/>
                    )
                  })
                }
              </div>
            </div>
          </section>
      }
    </>
  )
}

export default Exchanges