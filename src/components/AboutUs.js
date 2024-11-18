import React, { Component } from "react"
import { useLocation } from "react-router-dom"
export default function AboutUs(){
        const location =useLocation()
        const search = new URLSearchParams(location.search)

    
    
        return(
            <div>
                <h2>AboutUs</h2>
                 {search.get("college")}

            </div>
        )

    
}