import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLinks(props) {
  const pages = ['Filter', 'Visualizer'];

  return (
    <nav>
      <ul className={props.isMobileSidebar ? 'lg:hidden' : 'hidden lg:flex'}>
        {pages.map((page) => (
          <li key={page.toLowerCase()} className="px-8">
            <Link
              className={`text-xl font-thin hover:border-b-2 border-black focus:border-b-2 border-black ${
                page === props.currentPage ? 'font-medium' : ''
              }`}
              to={'/' + page.toLowerCase()}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationLinks;
