import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLinks(props) {
  return (
    <nav className="hidden lg:flex justify-center ml-auto">
      <ul className="flex justify-around">
        <li className="px-8">
          <Link className="nav-item" to="/filter">
            Filter
          </Link>
        </li>
        <li className="px-8">
          <Link className="nav-item" to="/visualizer">
            Visualizer
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
