import React from 'react';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte en tu journey de aprendizaje
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-600">soporte@codementor.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-600">+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-600">Madrid, España</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-600">Chat en vivo disponible 24/7</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Horario de atención
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">Lunes - Viernes: 9:00 - 20:00</p>
                <p className="text-gray-600">Sábado: 10:00 - 15:00</p>
                <p className="text-gray-600">Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}