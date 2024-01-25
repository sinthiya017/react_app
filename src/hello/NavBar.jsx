import ".././css/NavBar.css"
import { Link } from "react-router-dom"
const NavBar=()=>{
    return(
        <ul type="None">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Education">Education</Link></li>
            <li><Link to="/Login">Login</Link></li>

        </ul>
       
    )

}
export default NavBar