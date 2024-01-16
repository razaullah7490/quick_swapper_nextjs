import axios from "axios"
import authToken from "../../../utils/authToken"


const baseURL = process.env.NEXT_PUBLIC_BASE_URL


export const signUp = async(data) =>{
    try {
        const resp = await axios.post(baseURL+"/register/user" , data)
        return resp.data
    } catch (error) {
        console.log({error})
    }
}


export const logIn = async(data) =>{

    try {
        const resp = await axios.post(baseURL+"/login/user" , data)
        return resp.data
    } catch (error) {
        console.log({error})
    }
}
export const logInWithGoogle = async(data) =>{

    try {
        const resp = await axios.post(baseURL+"/google/login/user" , data)
        return resp.data
    } catch (error) {
        console.log({error})
    }
}

export const deletAccount = async(data) =>{
    try {
        const resp = await axios.delete(baseURL+"/user/deleteaccount" , {headers : authToken()} , data)
        return resp.data
    } catch (error) {
        console.log({error})
    }
}