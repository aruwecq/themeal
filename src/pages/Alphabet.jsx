import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../Axios/apiClient'
import ProductList from '../Components/ProductList/ProductList'
function Alphabet() {
  const { letter } = useParams()
  const [list, setList] = useState([])

  async function getFood() {
    try {
      const res = await apiClient.get(`search.php?f=${letter}`)
      console.log(res);
      setList(res.data.meals)

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getFood()
  }, [letter])
  return (
    <div>
      Meals starting with '{letter}'
      <ProductList  list={list} />
    </div>
  ) 
}

export default Alphabet
