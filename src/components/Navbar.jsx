import logo from "../assets/logo3.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = ({ toggleLanguage }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-11" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">

         
          
        <a href="https://www.linkedin.com/in/aleksa-veljkovic-4215ab351/"><FaLinkedin /></a>
        <FaGithub />
        <FaInstagram />
        </div>
    </nav>

  )
}

export default Navbar