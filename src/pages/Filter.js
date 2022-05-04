import React from 'react';
import Header from '../components/header/Header';

function Filter(props) {
  const test = async () => {
    const response = await fetch('http://localhost:3001/filter');
    const json = await response.json();
    console.log(json);
  };

  return (
    <>
      <Header currentPage="Filter" />
      <main>
        <button type="button" onClick={test}>
          Click Me
        </button>
        <table>
          <thead>
            <tr className="table-header-row text-white">
              <th>Title</th>
              <th>Length</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
              <th>Plays</th>
            </tr>
          </thead>
        </table>
      </main>
    </>
  );
}

export default Filter;
