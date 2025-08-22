import React from 'react'
import './Letter.css'
import { Link } from 'react-router-dom'
import { phabet } from '../../data/Alphabet'

const SearchByLetter = "www.themealdb.com/api/json/v1/1"

function Letter() {
  return (
    <div className=' alphabet-container container'>
        {/* <hr className='line'/> */}
        <h2 className='alphabet-title'>Browse by name</h2>
      <div className='row-alphabet'>
      {
      phabet.map((item) => (
            <Link to={`/alphabet/${item.title}`} key={item.id} className='alphabet-box'>
                <p>{`${item.title}`}<span className="slash">/</span>
</p>

            </Link>
        ))
      }
      </div>
      
    </div>
  )
}

export default Letter