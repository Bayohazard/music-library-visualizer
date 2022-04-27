import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavigationLinks from './NavigationLinks';
import HamburgerMenu from './HamburgerMenu';

function Header(props) {
  return (
    <header className="Header flex items-center justify-between px-8 sm:px-16">
      <Logo />
      <div className="flex items-center">
        <NavigationLinks isMobileSidebar={false} />
        <SearchBar placeholder="Search song, artist, album..." />
        <HamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
