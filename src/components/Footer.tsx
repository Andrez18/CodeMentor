import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  const navigation = {
    solutions: [
      { name: 'Cursos', href: '#' },
      { name: 'Ejercicios', href: '#' },
      { name: 'Proyectos', href: '#' },
      { name: 'Mentorías', href: '#' },
    ],
    support: [
      { name: 'Documentación', href: '#' },
      { name: 'Guías', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Comunidad', href: '#' },
    ],
    company: [
      { name: 'Sobre Nosotros', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Empleos', href: '#' },
      { name: 'Prensa', href: '#' },
    ],
    legal: [
      { name: 'Privacidad', href: '#' },
      { name: 'Términos', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="text-2xl font-bold text-white">CodeMentor</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Transformando el aprendizaje de la programación con métodos efectivos y prácticos.
            </p>
            <div className="flex space-x-6">
              {/* Add your social media icons here */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Soluciones</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Soporte</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Compañía</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} CodeMentor. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}