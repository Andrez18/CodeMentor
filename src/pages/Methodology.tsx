import React from 'react';
import { Brain, Target, Rocket, Award } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Comprensión Conceptual",
      description: "Aprende los fundamentos teóricos a través de explicaciones claras y ejemplos prácticos."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Práctica Guiada",
      description: "Resuelve ejercicios con feedback inmediato y orientación personalizada."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Proyectos Prácticos",
      description: "Aplica tus conocimientos en proyectos reales que fortalecen tu portafolio."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Evaluación y Certificación",
      description: "Obtén reconocimiento por tus logros y valida tus habilidades."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Nuestra Metodología
          </h1>
          <p className="text-xl text-gray-600">
            Un enfoque probado para desarrollar tu pensamiento lógico y habilidades de programación
          </p>
        </div>

        <div className="mt-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute h-full w-px bg-indigo-200 top-16 left-8 -bottom-12 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-indigo-50 rounded-3xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Por qué nuestra metodología funciona?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Combinamos la teoría con la práctica intensiva, proporcionando retroalimentación inmediata y apoyo personalizado para garantizar tu éxito en el aprendizaje.
            </p>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
              Comienza tu journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}