"use client"
import React, { useContext, useRef } from "react"
import { appContext } from "@/statemanagement/appContext"
const A = () => {
    const nameRef = useRef()
    const contextData = useContext(appContext)
    const handleClick = () =>{
        contextData.dispatch({type:"NAME_UPDATE",payload:nameRef.current})
    }
    return <div>
        <p>
            Name:<input type="text" onChange={(eve) =>{
                nameRef.current = eve?.target?.value
            }}
            />
        </p>
        <button onClick={handleClick}>Submit</button>
    </div>
}
export default A