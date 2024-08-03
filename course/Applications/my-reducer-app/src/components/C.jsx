"use client"
import { appContext } from "@/statemanagement/appContext"
import React, { useContext } from "react"
const C = () => {
    const contextData = useContext(appContext)
    return <div>
        <h1>Name : {contextData.state.name}</h1>
        <h1>Location: {contextData.state.loc}</h1>
    </div>
}
export default C