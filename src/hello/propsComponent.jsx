import ".././css/propscomponent.css"
function Propscomponent(props){
    const StyleAttrs={
        backgroundColor:"brown",
        color:"white"

    }
    return(
        <div style={{backgroundColor:"#282c34"}}>
            <h1>Hello,{props.name} <br></br>This is {props.course} class</h1>
            <h2 style={StyleAttrs}>sindhu</h2>
            
        </div>
    )

}
export default Propscomponent