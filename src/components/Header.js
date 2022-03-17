import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="Header flex items-center px-16">
      <Logo />
      <nav className="flex justify-center ml-auto">
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
      <SearchBar placeholder="Search song, artist, album.." />
    </header>
  );
}

export default Header;
