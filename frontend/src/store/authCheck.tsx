import { AppDispatch } from "./index"
import { baseURL } from "../service"
import { setIsAuthenticated, setUser } from "./authSlice"
import axios from "axios"
import { useAppSelector } from "../hooks/reduxHooks"



const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {
            const {data} = await axios.get(`${baseURL}users/showMe`, {withCredentials: true})
         
            console.log(data)
            if(data.success){
                dispatch(setIsAuthenticated(true))
                dispatch(setUser(data.user))
                
                
            }
            

        } catch (error) {
            console.log(error)
            dispatch(setIsAuthenticated(false))
        }
    }
}


export default checkAuthentication