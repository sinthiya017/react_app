//import { computeHeadingLevel } from "@testing-library/react";
import { useCallback, useState } from "react"
//import React from "react";

const Callback = ()=>{
    const [count,setCount] = useState(0);
    const list = [10,20,30,40,50] //{0:10,1:20,.....}
    const list1 =[...list,60,70,100,200,300]   //TASK:in list2 if value is exceeding 100 it doesnot print ,,write code for it)(Filter)
    list.forEach(element => {
        console.log(element);
    });
    // const handlingCallbackFunc=useCallback(()=>{
    //     useCallback(()=>{
    //         console.log(count);

    //     },[count]);
     
    return(
        <div>
            <h1>This is callback example</h1>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count+1)}>Add one</button>
            {/* <button onClick={handlingCallbackFunc}>callback count</button> */}
            <br/>
            <br/>
            <ol>  
                <p> the list values </p>
                {list1.map((val,index)=>(
                    <li key={index}>{val}</li>

                ))}
                <p>it is print the value less than 100</p>
                {list.filter(list=>list<100).map(((val,index)=>(
                    <li key={index}>{val}</li>
                )))}
            </ol>
           
        </div>
    );
};
export default Callback;