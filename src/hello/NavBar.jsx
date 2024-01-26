import ".././css/NavBar.css"
import { Link } from "react-router-dom"
const NavBar=()=>{
    return(
        <ul type="None">
            <li><Link to="/Home"class="Link">Home</Link></li>
            <li><Link to="/About"class="Link">About</Link></li>
            <li><Link to="/Education"class="Link">Education</Link></li>
            <li><Link to="/Login"class="Link">Login</Link></li>
            <li><Link to="/SignUp"class="Link">SignUp</Link></li>

        </ul>
       
    )

}
export default NavBar