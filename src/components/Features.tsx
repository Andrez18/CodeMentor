import React from 'react';
import { BookOpen, Users, Trophy, Lightbulb, Puzzle, Brain } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Contenido Estructurado",
      description: "Aprende con un plan de estudios organizado y progresivo que te guía paso a paso."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunidad Activa",
      description: "Únete a una comunidad de estudiantes y mentores dispuestos a ayudarte en tu journey."
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Retos Semanales",
      description: "Pon a prueba tus habilidades con desafíos de programación que te harán crecer."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Proyectos Prácticos",
      description: "Aplica lo aprendido en proyectos reales que podrás añadir a tu portafolio."
    },
    {
      icon: <Puzzle className="h-6 w-6" />,
      title: "Ejercicios Interactivos",
      description: "Practica con ejercicios que se adaptan a tu nivel y ritmo de aprendizaje."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Desarrollo Cognitivo",
      description: "Mejora tu capacidad de resolución de problemas y pensamiento abstracto."
    }
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Aprende Mejor</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para dominar la programación
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestra plataforma está diseñada para ayudarte a desarrollar un pensamiento lógico sólido y habilidades de programación efectivas.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}