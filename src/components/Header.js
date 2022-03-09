import React from 'react';
import Logo from './Logo';

function Header(props) {
  return (
    <div className="flex items-center">
      <Logo />
    </div>
  );
}

export default Header;
