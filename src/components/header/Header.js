import React from 'react';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import HamburgerMenu from './HamburgerMenu';

function Header(props) {
  return (
    <header className="Header flex items-center justify-between px-8 sm:px-16">
      <Logo />
      <div className="flex items-center">
        <NavigationLinks
          isMobileSidebar={false}
          currentPage={props.currentPage}
        />
        <input
          className="hidden md:flex ml-8"
          type="text"
          name="nav-search"
          placeholder="Search song, artist, album..."
        />
      </div>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
