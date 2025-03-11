import axios from "axios"


export const Login = async (formData) =>{
    const response = await axios.post(`/api/user/login`, formData)
    localStorage.setItem("Auth" , JSON.stringify(response.data))
return response.data
}

export const Register = async (formData) =>{
    const response = await axios.post(`/api/user/register`, formData)
    localStorage.setItem("Auth" , JSON.stringify(response.data))
    return response.data
}