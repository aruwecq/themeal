import './Card.css'
import { Link } from 'react-router-dom'
function Card({ data }) {
  return (
    <div>
      <div className="card">
        <Link to={`/mealdeteail/${data.idMeal}`}>
          <div className="card">
            <img src={data.strMealThumb} alt="" />
            <p>{data.strMeal}</p>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Card
