import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <GraduationCap size={32} color="#ffffff" />
        <span className="navbar-title">ABES Engineering College</span>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-item">Home</Link>
        </li>
        <li>
          <Link to="/work" className="navbar-item">Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
