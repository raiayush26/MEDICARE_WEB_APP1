import "./footer.css";

import { Fa500Px } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub} from "react-icons/ai";
const Footer = () =>{
    const currentYear = new Date().getFullYear();
    const demoDate = new Date();

    const current = new Date();
    const date =    `${current.getMonth()+1}-${current.getFullYear()}`;
    return (
    <div className="footer">
  
 <a href="https://www.facebook.com/raiayush2610"><BsFacebook className="social-icon"/></a>
 <a href="https://www.instagram.com/raiayush2610"><BsInstagram className="social-icon" size={10}/></a>
 <a href="https://in.linkedin.com/raiayush2610"><AiFillLinkedin className="social-icon"/></a>
 <a href="https://github.com/raiayush2610"><AiFillGithub className="social-icon"/></a>
 <p className="copyright"> &copy; Copyright  MedicareWEb-App  {date}  </p>
            </div>
    
)

}
export default Footer;