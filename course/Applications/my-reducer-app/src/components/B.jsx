"use client"
import { appContext } from "@/statemanagement/appContext"
import React, { useContext, useState } from "react"
const B = () => {
    const [loc, setLoc] = useState("")
    const contextData = useContext(appContext)
    const handleClick = () => {
        contextData.dispatch({type:"LOC_UPDATE",payload:loc})
    }
    return <div>
        <p>
            Location:<input type="text" onChange={(eve)=>{
                setLoc(eve?.target?.value)
            }}/>
        </p>
        <button onClick={handleClick}>Submit</button>
    </div>
}
export default B