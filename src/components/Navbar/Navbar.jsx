import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className = "navbar">
      <div className = "navbar-container">
        <Link to = "/" className="navbar-logo">
        <img src={logo} alt="SoundWave"></img>
        <span>SoundWave</span>
        </Link>
        <ul className="navbar-menu">
          <li><Link to = "/discover">Discover</Link></li>
          <li><Link to = "/join">Join</Link></li>
        </ul>
      </div>
    </nav>
  )
} 

export default Navbar