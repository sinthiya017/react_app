import React,{ useEffect, useRef, useState } from "react"

const Reference=()=>{
    const [batchsize,updatebatchsize] =useState("")
    const prevbatch=useRef(batchsize)
    useEffect(()=>{
        prevbatch.current=batchsize
    },[batchsize])

    return(
        <div>
            <h1>this is eg of useref</h1>
            <input type="number" onChange={(event)=>{updatebatchsize(event.target.value)}}/>
            <h2>The batch2 sixe is {batchsize}and its previous batch2 size is {prevbatch.current}</h2>
        </div>
    )
}

export default Reference