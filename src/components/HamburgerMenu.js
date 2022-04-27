import React, { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import CloseIcon from '../images/close-icon.svg';
import HamburgerIcon from '../images/hamburger-icon.svg';

function HamburgerMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="flex lg:hidden ml-12"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <img src={CloseIcon} /> : <img src={HamburgerIcon} />}
      </div>
      <div className="lg:hidden">
        {isMenuOpen ? (
          <div className="nav-sidebar w-3/4 sm:w-1/3 h-full text-center">
            <NavigationLinks
              isMobileSidebar={true}
              className="flex justify-center px-8"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default HamburgerMenu;
