import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../Axios/apiClient'
import { listFlag } from '../data/Country'
import './Detail.css'

const API = "https://www.themealdb.com/images/icons/flags/big/64";
const IMAGE_API = "https://www.themealdb.com/images/ingredients"
function MealDeteail() {

  const { id } = useParams()
  const [meal, setMeal] = useState({})

  async function getMealDetail() {
    try {
      const res = await apiClient.get(`/lookup.php?i=${id}`)
      console.log(res);
      setMeal(res.data.meals[0])

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMealDetail()
  }, [])

  const findArea = listFlag.find((x)=> x.title== meal.strArea)
// let array =[]
let array = []

for (let i = 1; i<=20; i++){
  let strName = meal["strIngredient" +i]
  if ( strName){
    array.push({name:strName})
  }
}

  console.log(array);
  
  return (
  <div className='container infoMeal '>
      <h1>{meal.strMeal}</h1>
      <div className='arrow'>
        <img className='arrow-img' src="https://www.themealdb.com/images/icons/Arrow-Left.png" alt="" />
        <img className='flag' src={`${API}/${findArea?.image}.png`} alt="" />
        <img  className='arrow-img'src="https://www.themealdb.com/images/icons/Arrow-Right.png" alt="" />
      </div>
    <div className="info-content">
        <div className="info-left">
          <img src={meal.strMealThumb} alt="" />
        </div>
        <div className="info-right image-box" 
        >
          {array.map((item, index) => (
            <div key={index} >
              <img src={`${IMAGE_API}/${item.name}.png`} alt="" className="IMAGE_API"/>
            </div>
          ))}
        </div>
      </div>
      </div>
  )
}

export default MealDeteail
