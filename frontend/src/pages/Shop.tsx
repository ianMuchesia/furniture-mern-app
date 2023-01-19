import React, { useEffect } from 'react'
import axios from 'axios'
const Shop = () => {
    useEffect(()=>{
        let isMounted = true
        const fetchData = async()=>{
            
            try {
                const response = await axios.get('http://localhost:3000/api/v1/products')
                if(isMounted){

                }
            
            console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        return ()=>{isMounted=false}
    }, [])
  return (
    <div>Shopp</div>
  )
}

export default Shop