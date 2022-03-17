import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <input type="text" name="nav-search" placeholder={props.placeholder} />
    </div>
  );
}

export default SearchBar;
