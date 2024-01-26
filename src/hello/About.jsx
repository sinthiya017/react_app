
/*const About =()=>{
    const [Name,updatename]=useState("Sindhu")
    const updatingname=()=>{
        updatename("sinthiyavenkatesan")
    }
   
    return(
        <div>
            <h1>Welcome to {Name}</h1>
            <button onDoubleClick={updatingname}>Update Name</button>
        </div>
    )
}*/

import { useEffect, useState } from "react";

const About = () => {
    const [Tabname, Settabname] = useState("You dont have any disease ,dont take any pills to avoid side effetes ")
    const updateTabname = () => {
        Settabname("Welcome to cold world take this tablet Citricin cure it")
    }
    const updateTablet1 = () => {
        Settabname("Welcome to fever world take this tablet paracetamol cure it")
    }
    const updateTablet2 = () => {
        Settabname("Welcome to headpain world take this tablet dollo350 cure it")
    }

    useEffect(() => {
            console.log("sideeffects are sleepy,drowsy")
         },[Tabname])
        // fetch("https://jsonplaceholder.typicode.com/${tab/1}")
    //         .then((response) => response.json)
    //         .then((json) => console.log(json))
    // }, [Tabname])
    return (
        <div style={{backgroundColor:"plum"}}>
            <h1>{Tabname}</h1>
            <button onClick={updateTabname}>click me if you feel cold</button>
            <button onClick={updateTablet1}>click me if you feel fever</button>
            <button onClick={updateTablet2}>click me if you feel headpain</button>
        </div>
    )
}
export default About
    
