import React from 'react';

function SearchBar(props) {
  return (
    <div className="hidden md:flex">
      <input type="text" name="nav-search" placeholder={props.placeholder} />
    </div>
  );
}

export default SearchBar;
