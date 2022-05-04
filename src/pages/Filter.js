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
    </>
  );
}

export default Filter;
