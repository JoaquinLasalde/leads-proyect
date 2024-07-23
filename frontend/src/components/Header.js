import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold font-inter text-pale-orange">Titulo y logo</h1>
        <nav>
          <ul className="flex space-x-6">
            {['Inicio', 'Sobre Nosotros', 'Contacto'].map((item, index) => (
              <li key={index}>
                <Link 
                  to={index === 0 ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white hover:text-pale-orange transition duration-300 font-roboto text-lg relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-pale-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;