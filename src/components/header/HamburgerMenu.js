import React, { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import CloseIcon from '../../images/close-icon.svg';
import HamburgerIcon from '../../images/hamburger-icon.svg';

function HamburgerMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <input
        type="checkbox"
        id="navbar-toggle"
        className="hidden"
        onChange={(e) => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      <div className="nav-sidebar w-3/4 sm:w-1/3 h-full text-center">
        <NavigationLinks
          isMobileSidebar={true}
          className="flex justify-center px-8"
        />
      </div>
      <label for="navbar-toggle">
        <div className="ml-12 hover:cursor-pointer">
          {isMenuOpen ? <img src={CloseIcon} /> : <img src={HamburgerIcon} />}
        </div>
      </label>
    </div>
  );
}

export default HamburgerMenu;
