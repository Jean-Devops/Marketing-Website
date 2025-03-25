import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <Link to="/marketing-website">
        <div className="flex items-center gap-3">
          <Gamepad2 className="text-blue-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">Epic Figure Studio</h1>
        </div>
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/marketing-website" className="text-gray-700 hover:text-pink-600">Home</Link></li>
            <li><Link to="/marketing-website/about" className="text-gray-700 hover:text-pink-600">Sobre</Link></li>
            <li><Link to="/marketing-website/policies" className="text-gray-700 hover:text-pink-600">Políticas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
