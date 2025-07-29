"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCartPlus, FaHome } from "react-icons/fa";

type NavbarProps = {
  categories: string[];
};

export default function Navbar({ categories }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/productos",
    },
    {
      label: "Categorías",
      href: "/categorias",
    },
    {
      label: "Carrito",
      href: "/carrito",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
  ];

  return (
    <>
      {/* Navbar fijo en la parte superior */}
      <nav className="fixed top-0 left-0 right-0 z-50 gradient-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo y menú hamburguesa */}
            <div className="flex items-center">
              {/* Menú hamburguesa - visible en mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Logo MAXICOMPRA */}
              <Link href="/">
                <div className="flex items-center ml-2 md:ml-0">
                  {/* Texto MAXICOMPRA */}
                  <span className="text-white font-bold text-xl tracking-wide">
                    MAXICOMPRA
                  </span>
                </div>
              </Link>
            </div>

            {/* Menú de navegación - oculto en mobile */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white hover:text-accent-400 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Iconos de la derecha */}
            <div className="flex items-center space-x-4">
              {/* Búsqueda */}
              <button className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Carrito de compras */}
              <Link href="/carrito">
                <button className="cursor-pointer p-2 text-white hover:bg-white/10 rounded-full transition-colors relative">
                  <FaCartPlus className="w-5 h-5" />
                  {/* Badge del carrito */}
                  <span className="absolute -top-1 -right-1 bg-accent-400 text-gray-800 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    0
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 text-white flex gap-4 overflow-x-scroll">
          {categories.map((category, index) => (
            <Link
              key={index}
              className="inline-block whitespace-nowrap w-[300px] p-3 lg:p-4"
              href="/categorias"
            >
              {category}
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay oscuro para el sidebar móvil */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-64 gradient-secondary transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header del sidebar */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center">
            <span className="text-white font-bold text-lg">MAXICOMPRA</span>
          </div>

          {/* Botón de cerrar */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menú del sidebar */}
        <div className="p-4">
          <div className="space-y-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaHome className="w-5 h-5 mr-3" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Sección adicional en el sidebar */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <h3 className="text-white/80 text-sm font-medium mb-3 px-4">
              Mi Cuenta
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Mi Perfil
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Mis Pedidos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Espaciador para el contenido debajo del navbar fijo */}
      <div className="h-28 lg:h-30"></div>
    </>
  );
}
