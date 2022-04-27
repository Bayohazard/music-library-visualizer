import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLinks(props) {
  return (
    <nav>
      <ul className={props.isMobileSidebar ? 'lg:hidden' : 'hidden lg:flex'}>
        <li className="px-8">
          <Link
            className="text-xl font-thin hover:border-b-2 border-black focus:border-b-2 border-black"
            to="/filter"
          >
            Filter
          </Link>
        </li>
        <li className="px-8">
          <Link
            className="text-xl font-thin hover:border-b-2 border-black focus:border-b-2 border-black"
            to="/visualizer"
          >
            Visualizer
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
