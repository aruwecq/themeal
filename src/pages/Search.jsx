import React,{use, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../Axios/apiClient'
import ProductList from '../components/ProductList/ProductList'
function Search() {
    const{title}= useParams()
    const [product, setProduct] = useState([])
    async function getSearchMeal() {
        try {
            const res = await apiClient.get(`/search.php?s=${title}`)

            console.log(res);
            setProduct(res.data.meals)
        } catch (error) { 
        console.log(error);
        
        }
    }
    useEffect(()=>{
        getSearchMeal()
    },[title])
  return (
    <div>
     <ProductList list={product}/>
    </div>
  )
}

export default Search
