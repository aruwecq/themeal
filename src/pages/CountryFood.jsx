import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../Axios/apiClient'
import ProductList from '../Components/ProductList/ProductList'
import Loading from '../components/loading/Loading'
function CountryFood() {
    const{ area} = useParams()
    const [product,setProduct] = useState ([])
    const [ loading, setLoading] = useState()
    async function getFood() {
        setLoading(true)
        try {
            const res =await apiClient.get(`/filter.php?a=${area }`)

            console.log(res);
            setProduct(res.data.meals)
            setTimeout(()=>{
                setLoading(false)
            },4000)
        } catch (error) {
            console.log(error);
               setLoading(false) 
        }
    }
    useEffect(()=>{
        getFood()
    }, [])

    if( loading){
        return <Loading/>
    }
  return (
    <div>
      <ProductList list={product}/>
    </div>
  )
}

export default CountryFood
