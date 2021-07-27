import Axios from "axios";
import { getLocalStorage } from "./localStorage";

const apiKey = getLocalStorage('token')

console.log(apiKey)
export const Base = Axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-credentials': true,
        // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
})  

export const Base1 = Axios.create({
     baseURL: 'http://localhost:8080/',
     headers: {
         Authorization: `Bearer ${apiKey}`
     }
 })  