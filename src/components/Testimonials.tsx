import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Gracias a CodeMentor, pude desarrollar una base sólida en programación. Los ejercicios prácticos y el feedback inmediato fueron clave en mi aprendizaje.",
      author: "María González",
      role: "Estudiante de Ingeniería",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "La metodología de enseñanza es excepcional. Los conceptos complejos se explican de manera clara y los proyectos prácticos ayudan a consolidar el aprendizaje.",
      author: "Carlos Rodríguez",
      role: "Desarrollador Junior",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "El enfoque en la lógica de programación me ayudó a entender realmente cómo pensar como programador. Ahora puedo resolver problemas con mayor facilidad.",
      author: "Ana Martínez",
      role: "Estudiante Universitaria",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros estudiantes
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-2xl">
                <div className="flex items-center gap-x-1 text-indigo-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full bg-gray-50" src={testimonial.image} alt="" />
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author}</h3>
                    <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}