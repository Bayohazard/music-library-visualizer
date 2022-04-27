import React from 'react';
import Header from '../components/header/Header';
import vinylImage from '../images/vinyl.svg';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="Home flex justify-between h-full">
          <div className="flex-row mx-12 md:ml-48 mt-24">
            <h1 className="text-white text-5xl sm:text-6xl">
              Music Library Helper
            </h1>
            <p className="subheading mt-24 text-white">
              Search through and analyze your music library with ease
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
