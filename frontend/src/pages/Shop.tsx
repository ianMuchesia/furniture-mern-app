import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { Product } from '../@types/type'
const Shop = () => {
    const [products , setProducts ] = useState<Product[]>([])

    useEffect(()=>{
        let isMounted = true;
        const fetchData = async()=>{
            const {data} = await axios.get('http://localhost:3000/api/v1/products')
           
            if(isMounted ){
                setProducts(data.msg)
            }
        }
        fetchData()
        return ()=>{isMounted = false}
    },[])
    console.log(products)
    
  return (
    <div  className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {
            products.map(product=>{
                return <Card key={product._id} product={product}/> 
            })
        }
       
    </div>
  )
}

export default Shop