"use client";

import { appRoutes } from "@/constants/app-routes";
import Link from "next/link";
import { FaHome, FaSearch, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icono de error animado */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <FaExclamationTriangle className="text-white text-5xl" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-gray-800 font-bold text-sm">404</span>
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          ¡Ups! Página no encontrada
        </h1>

        {/* Mensaje descriptivo */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida. No te
          preocupes, tenemos muchas otras cosas increíbles para ti.
        </p>

        {/* Estadísticas divertidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Productos disponibles</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-secondary-600 mb-2">
              24/7
            </div>
            <div className="text-gray-600">Soporte disponible</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <div className="text-3xl font-bold text-accent-600 mb-2">100%</div>
            <div className="text-gray-600">Garantía de calidad</div>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href={`${appRoutes.home}`}>
            <button className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
              <FaHome className="text-lg" />
              Volver al Inicio
            </button>
          </Link>

          <Link href={`${appRoutes.products}`}>
            <button className="btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto">
              <FaSearch className="text-lg" />
              Explorar Productos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
