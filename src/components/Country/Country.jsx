import './Country.css'
import { listFlag } from '../../data/Country'
import { Link } from 'react-router-dom'
const API_IMAGE = "https://www.themealdb.com/images/icons/flags/big/64"
function Country() {
  return (
    <div className='container'>
        <div className='listFlag'>
      {
        listFlag.map((item)=>(
            <Link to={`/food/${item.title}`} key={item.id}>
            <img src={`${API_IMAGE}/${item.image}.png`} alt="" />
            </Link>
        ))
     
      }
      </div>
    </div>
  )
}

export default Country
