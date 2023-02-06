import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Card, Categorize } from '../components/ShopComponents'
import { Product } from '../@types/type'
import Loader from '../components/Loader'
const Shop = () => {
    const [products , setProducts ] = useState<Product[]>([])

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        let isMounted = true;
        const fetchData = async()=>{
            setLoading(true)
           try {
            const {data} = await axios.get('http://localhost:3000/api/v1/products')
           
            if(isMounted ){
                setProducts(data.msg)
            }
           } catch (error) {
            
           }finally{
            setLoading(false)
           }
        }
        fetchData()
        return ()=>{isMounted = false}
    },[])
    console.log(products)
    
  return (
    <section className='p-10 ' >
      <Categorize/>
      <hr className='border-1 border-gray-500 m-2'/>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {loading && <Loader/>}
      {   products.map(product=>{
            return <Card key={product._id} product={product}/> 
        })}
        </div>
        
       
    </section>
  )
}

export default Shop