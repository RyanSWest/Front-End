import axios from "axios"


export const axiosWithAuth =()=> {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id")



    return axios.create ({
        headers: {
            "Content-Type": "application/json",
           'authorization': `${token}`,
           'user_id':` ${user_id}`
           
        },
    });
}