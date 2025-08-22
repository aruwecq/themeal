import React,{useState, useEffect} from 'react'
import Baner from '../components/Baner/Baner'
import ProductList from '../Components/ProductList/ProductList'
import apiClient from '../Axios/apiClient'
import Country from '../components/Country/Country'
import Letter from '../components/Letter/Letter'
function Home() {
  const [ product, setProduct] = useState ([])
  
  async function getMeal() {
    try {
       const res= await apiClient.get(`/search.php?s=a`)
       console.log(res);
       setProduct(res.data.meals)
       
    } catch (error) {
      console.log(error );
      
    }
  }

useEffect(()=>{
  getMeal()
},[])

  return (
    <div>
      <Baner/>
      <ProductList list={product} />
      <Country/>
      <Letter/>
    </div>
  )
}

export default Home
