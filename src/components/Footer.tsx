import { appRoutes } from "@/constants/app-routes";
import Image from "next/image"
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href={`${appRoutes.home}`} className="flex-shrink-0">
              <Image
                src="/assets/lg-maxicompra.png"
                alt="Logo MaxiCompra"
                width={180}
                height={40}
                priority
              />
            </Link>
            <p className="text-gray-300">
              Tu tienda de confianza para encontrar los mejores productos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>info@MAXICOMPRA.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Calle Principal</li>
              <li>Ciudad, País</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} MAXICOMPRA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
