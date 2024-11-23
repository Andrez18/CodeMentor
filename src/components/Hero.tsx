import React from 'react';
import { ArrowRight, Brain, Code, Target } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Domina la{' '}
          <span className="relative whitespace-nowrap text-indigo-600">
            <span className="relative">lógica de programación</span>
          </span>{' '}
          de manera efectiva
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Desarrolla tu pensamiento lógico y aprende a programar con métodos probados y ejercicios prácticos diseñados por expertos.
        </p>

        <div className="mt-10 flex justify-center gap-x-6">
          <a href="#" className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-indigo-600">
            Comenzar ahora
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          
          <a href="#" className="group inline-flex ring-1 ring-slate-200 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300">
            Ver demo
          </a>
        </div>

        <div className="mt-36 lg:mt-44">
          <p className="font-display text-base text-slate-900">
            Beneficios principales
          </p>
          <ul className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                text: "Desarrollo del pensamiento lógico"
              },
              {
                icon: <Code className="h-8 w-8" />,
                text: "Ejercicios prácticos interactivos"
              },
              {
                icon: <Target className="h-8 w-8" />,
                text: "Aprendizaje personalizado"
              }
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-4 text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-slate-700">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}