import React, { useState } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavigationLinks from './NavigationLinks';
import CloseIcon from '../images/close-icon.svg';
import HamburgerIcon from '../images/hamburger-icon.svg';

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="Header flex items-center justify-between px-8 sm:px-16">
      <Logo />
      <div className="flex items-center">
        <NavigationLinks />
        <SearchBar placeholder="Search song, artist, album.." />
        <div
          className="flex lg:hidden ml-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <img src={CloseIcon} /> : <img src={HamburgerIcon} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
