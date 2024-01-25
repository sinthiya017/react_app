import ".././css/Footer.css"
import { Link } from "react-router-dom"

import React from "react"
const Footer = () => {
    return (
        <div class="footer">
            {/* <div style={{backgroundColor:"aqua"}}></div> */}
            <p>ADDRESS: <span>Tnagar,chennai</span></p>
            <p>MOBILENUMBER: <span>6374735236</span></p>
            <p>EMAIL: <span>sinthya017.v@gmail.com</span></p>

            <ul type="None">
                <li><Link to="/Termsofservice">Terms of Service</Link></li>
                <li><Link to="/PrivacyPolicy">Privacy Police</Link></li>

            </ul>

        </div>



    )


}
export default Footer