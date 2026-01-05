import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className = "navbar">
      <div className = "navbar-conatiner">
        <link to = "/" className="navbar-logo">
        <img src="/src/assets/images/logo.png" alt="SoundWave"></img>
        <span>SoundWave</span>
        </link>
        <ul className="navbar-menu">
          <li><Link to = "/Discover">Discover</Link></li>
          <li><Link to = "/Join">Join</Link></li>
        </ul>
      </div>
    </nav>
  )
} 