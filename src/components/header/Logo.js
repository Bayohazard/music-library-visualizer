import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../images/logo.svg';

function Logo(props) {
  return (
    <div className="w-32">
      <Link to="/" className="hover:no-underline">
        <img src={LogoImage} alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
