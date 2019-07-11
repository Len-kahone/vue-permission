import axios from "axios"


export default{

    getCate(){
       return axios.get("/api/getCate").then(res=>res.data)
    }


}