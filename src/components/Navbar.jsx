import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/Navbar.css';

const Navbar = () => {
  const [randomId, setRandomId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const generateRandomId = () => {
    const id = Math.floor(Math.random() * 827) + 1;
    setRandomId(id);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="navbar-link">Home</Link>
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>☰</button>

      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li>
          <Link to={`/details/${randomId || 1}`} className="navbar-link" onClick={generateRandomId}>
            Aleatorio
          </Link>
        </li>
        <li><Link to="/yay" className="navbar-link">Proyecto Final</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;