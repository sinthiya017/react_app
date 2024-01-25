import React from "react";
class Statecomponent extends React.Component{
    constructor(){
        super()
        this.state={ 
            name:"sinthiya",
            course:"MERN"
        }
    }
    changeState=()=> {
        console.log("Sinthiyavenkatesan")//useState should be used when we come to hooks.   
    }

    render(){
        return(
            <div>
                <h1>This is state component </h1>
                <h2>Hello,{this.state.name} <br></br>This is {this.state.course} class</h2>
                <h3>I am changing the state  {this.state.name} to{this.changeState()}</h3>
                <button onMouseOver={this.changeState}>click me to change the state</button>
            </div>
        )
    }
}
export default Statecomponent
