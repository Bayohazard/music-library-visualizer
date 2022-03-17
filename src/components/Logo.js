import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
  return (
    <div>
      <Link to="/" className="hover:no-underline">
        <p className="Logo hover:no-underline">MLH</p>
      </Link>
    </div>
  );
}

export default Logo;
