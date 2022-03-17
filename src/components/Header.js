import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="Header flex items-center px-16">
      <Logo />
      <nav className="flex justify-center ml-auto">
        <ul>
          <li>
            <Link to="/filter">Filter</Link>
          </li>
          <li>
            <Link to="/visualizer">Visualizer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
