import React from 'react';
import { BookOpen, Code, Terminal, Database } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "Fundamentos de Programación",
      description: "Aprende las bases de la lógica de programación y algoritmos",
      icon: <Terminal className="h-6 w-6" />,
      level: "Principiante",
      duration: "8 semanas",
      price: "Gratis"
    },
    {
      title: "Estructuras de Datos",
      description: "Domina las estructuras de datos fundamentales",
      icon: <Code className="h-6 w-6" />,
      level: "Intermedio",
      duration: "10 semanas",
      price: "€29.99/mes"
    },
    {
      title: "Algoritmos Avanzados",
      description: "Mejora tus habilidades de resolución de problemas",
      icon: <BookOpen className="h-6 w-6" />,
      level: "Avanzado",
      duration: "12 semanas",
      price: "€39.99/mes"
    },
    {
      title: "Patrones de Diseño",
      description: "Aprende a diseñar software escalable y mantenible",
      icon: <Database className="h-6 w-6" />,
      level: "Avanzado",
      duration: "8 semanas",
      price: "€39.99/mes"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Nuestros Cursos
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Desarrolla tus habilidades con nuestros cursos especializados
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                        {course.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-gray-600">{course.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Nivel</p>
                    <p className="mt-1 font-medium">{course.level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duración</p>
                    <p className="mt-1 font-medium">{course.duration}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      {course.price}
                    </span>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                      Inscribirse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}