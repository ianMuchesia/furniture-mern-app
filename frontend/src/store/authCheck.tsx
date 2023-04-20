import { AppDispatch } from "./index"
import { baseURL } from "../service"
import { setIsAuthenticated, setUser } from "./authSlice"



const checkAuthentication=()=>{
    return async(dispatch:AppDispatch)=>{
        try {
            const response = await fetch(`${baseURL}users/showMe`)
            const data = await response.json()
            if(data.success){
                dispatch(setIsAuthenticated(true))
                dispatch(setUser(data.user))
            }
            dispatch(setIsAuthenticated(false))

        } catch (error) {
            console.log(error)
            dispatch(setIsAuthenticated(false))
        }
    }
}


export default checkAuthentication