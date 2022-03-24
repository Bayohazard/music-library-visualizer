import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import HamburgerIcon from './HamburgerIcon';
import NavigationLinks from './NavigationLinks';

function Header(props) {
  return (
    <header className="Header flex items-center px-16">
      <Logo />
      <HamburgerIcon />
      <NavigationLinks />
      <SearchBar placeholder="Search song, artist, album.." />
    </header>
  );
}

export default Header;
