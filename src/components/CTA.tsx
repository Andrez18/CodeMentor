import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-indigo-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para mejorar tus habilidades?
            <br />
            Comienza tu viaje hoy mismo
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
            Únete a miles de estudiantes que ya están mejorando sus habilidades de programación con nuestra plataforma.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center">
              Comenzar gratis <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Conoce más <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}