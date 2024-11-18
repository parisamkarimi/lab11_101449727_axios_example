import React, { useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect } from "react"
export default function UserDetails(){
    const {userid} = useParams()
    var [user, setUser] = useState([])
   
    const  getUsers =async() =>{
        const UserUrl ="https://jsonplaceholder.typicode.com/users/${userid}"
        try{
            const response = await axios.get(UserUrl)
            setUser(response.data)
            console.log(response.data)
            
        }catch(error){

            console.log(error)
        }
        
        
    }

    useEffect(() => {
      getUsers()
      return() =>{
        console.log("After useEffect")
            
        }
      
    },[])

  return(
    <div>
        <h2>UserDetails</h2>
        {
            JSON.stringify(user)
        }
    </div>
  )  
}