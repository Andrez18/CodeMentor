import React, { useState } from 'react';
import { Menu, X, Code2, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">CodeMentor</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 flex items-center">
              Cursos <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Metodología</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Testimonios</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contacto</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
              Empezar Ahora
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Cursos</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Metodología</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Testimonios</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contacto</a>
            <button className="w-full text-center bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
              Empezar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}