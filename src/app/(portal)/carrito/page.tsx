import Link from "next/link";
import {
  FaTrash,
  FaArrowLeft,
  FaShoppingCart,
  FaTruck,
  FaCreditCard,
  FaGift,
} from "react-icons/fa";
import { products } from "@/constants/products";

const CarritoPage = () => {
  const cartItems = products.slice(0, 3);
  const totalItems = cartItems.length;

  // Si el carrito está vacío
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="mb-8">
              <FaShoppingCart className="mx-auto text-6xl text-gray-300 mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Tu carrito está vacío
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Parece que aún no has agregado productos a tu carrito de
                compras.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="/productos"
                className="btn-primary inline-flex items-center"
              >
                <FaArrowLeft className="mr-2" />
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/productos"
                className="btn-secondary inline-flex items-center"
              >
                <FaArrowLeft className="mr-2" />
                Seguir Comprando
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">
                Carrito de Compras
              </h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total de productos</p>
              <p className="text-2xl font-bold text-primary-600">
                {totalItems}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Productos ({totalItems})
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Imagen del producto */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                        />
                      </div>

                      {/* Información del producto */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Link href={`/${item.slug}`}>
                              <h3 className="cursor-pointer text-lg font-semibold text-gray-900 mb-1">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-gray-600 mb-2">
                              {item.category}
                            </p>

                            {/* Badges especiales */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="flash-offer">
                                ¡OFERTA FLASH!
                              </span>
                              <span className="express-shipping">
                                Envío Express
                              </span>
                            </div>

                            {/* Precios */}
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-primary-600">
                                ${item.price.toFixed(2)}
                              </span>
                              {item.originalPrice && (
                                <span className="text-lg text-gray-500 line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Controles de cantidad y eliminar */}
                          <div className="flex flex-col items-end space-y-3">
                            <button
                              className="text-red-500 hover:text-red-700 transition-colors p-2"
                              title="Eliminar producto"
                            >
                              <FaTrash className="w-4 h-4" />
                            </button>

                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
                                -
                              </button>
                              <span className="px-4 py-1 text-center min-w-[3rem] font-semibold">
                                {1}
                              </span>
                              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Subtotal del item */}
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              Subtotal ({1} {1 === 1 ? "unidad" : "unidades"})
                            </span>
                            <span className="text-lg font-semibold text-gray-900">
                              ${(item.price * 1).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón para limpiar carrito */}
              <div className="p-6 border-t border-gray-200">
                <button className="text-red-600 hover:text-red-800 font-medium transition-colors">
                  Limpiar carrito
                </button>
              </div>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden sticky top-40 z-10">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Resumen del Pedido
                </h2>
              </div>

              <div className="p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Q{(1000).toFixed(2)}</span>
                </div>

                {/* Descuentos */}
                {1000 > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Descuentos</span>
                    <span className="font-semibold">-Q{(1000).toFixed(2)}</span>
                  </div>
                )}

                {/* Envío */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-semibold">
                    <span className="text-green-600">Gratis</span>
                  </span>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-primary-600">
                      Q{(1000).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaTruck className="mr-2 text-secondary-600" />
                    Envío gratis en compras superiores a Q{1000}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaCreditCard className="mr-2 text-secondary-600" />
                    Pago seguro con tarjeta
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaGift className="mr-2 text-accent-500" />
                    Garantía de 30 días
                  </div>
                </div>

                {/* Botón de checkout */}
                <button className="btn-primary w-full text-lg py-4">
                  Proceder al Pago
                </button>

                {/* Cupón de descuento */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Código de descuento"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button className="btn-secondary">Aplicar</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bono destacado */}
            <div className="mt-6">
              <div className="bono-highlight text-center">
                <div className="text-sm font-bold mb-1">¡BONO ESPECIAL!</div>
                <div className="text-lg font-black">$50 OFF</div>
                <div className="text-xs">En compras superiores a $500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoPage;
