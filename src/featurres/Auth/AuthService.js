import axios from "axios"

const API_URL = "https://authentication-api-qtax.onrender.com/api/user"

export const Login = async (formData) =>{
    const response = await axios.post(`${API_URL}/login`, formData)
    localStorage.setItem("Auth" , JSON.stringify(response.data))
return response.data
}

export const Register = async (formData) =>{
    const response = await axios.post(`${API_URL}/register`, formData)
    localStorage.setItem("Auth" , JSON.stringify(response.data))
    return response.data
}