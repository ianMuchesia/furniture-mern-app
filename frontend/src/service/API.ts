import axios from "axios";

export default ()=>{
    return axios.create({
        baseURL:'http://localhost:3000/api/v1/'/* import.meta.env.VITE_KEY_URL */
    })
}