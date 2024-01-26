import ".././css/Footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div class="footer" style={{backgroundColor:"pink"}}>
            {/* <div style={{backgroundColor:"aqua"}}></div> */}
            <p>&copy; 2024 All Rights Reserved by <span>authorized</span></p>
            <p>ADDRESS: <span>Tnagar,chennai</span></p>
            <p>MOBILENUMBER: <span>6374735236</span></p>
            <p>EMAIL: <a href='mailto:sinthya017.v@gmail.com'>sinthya017.v@gmail.com</a></p>

            <ul type="None">
                <li><Link to="/Termsofservice"class="Link">Terms of Service</Link></li>
                <li><Link to="/PrivacyPolicy"class="Link">Privacy Police</Link></li>

            </ul>

        </div>



    )


}
export default Footer