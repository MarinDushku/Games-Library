import Search from './search.js';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png'; 
import './navbar.css';  

export default function Navbar(){
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/library')}>Library</li>
        <li onClick={() => navigate('/playnow')}>Play Now</li> {/* Changed to lowercase */}
        <li onClick={() => navigate('/about')}>Contact Us</li>
        <li onClick={() => navigate('/support')}>Support</li>
        <div className="search-container">
          <Search />                   
        </div>
      </ul>
    </div>
  ); 
}