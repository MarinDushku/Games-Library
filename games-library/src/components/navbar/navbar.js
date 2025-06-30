import Logo from '../../images/logo.png';
import './navbar.css';

export default function Navbar(){  
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar-logo" />  
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Library</li>
        <li>About</li>
        <li>Support</li>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="button" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </ul>
    </div>
  );
}