import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
  return (
    <div>
      <Link to="/" className="hover:no-underline">
        <h1 className="inline hover:no-underline text-5xl px-1 py-8">MLH</h1>
      </Link>
    </div>
  );
}

export default Logo;
