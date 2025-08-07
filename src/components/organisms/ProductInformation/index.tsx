"use client";

import { useState } from "react";
import {
  FaStar,
  FaTruck,
  FaUndo,
  FaCheck,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import { Product } from "@/services/products/model";

type ProductInformationProps = {
  product: Product;
};

const ProductInformation = ({ product }: ProductInformationProps) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Producto agregado al carrito:", {
      product: product.title,
      quantity,
    });
  };

  const handleBuyNow = () => {
    console.log("Comprar ahora:", { product: product.title, quantity });
  };

  return (
    <div className="space-y-6">
      {/* Nombre y precio */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="badge-primary">-{15}%</span>
          <span className="badge-accent">BONO 14</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {product.title}
        </h1>
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-3xl font-bold text-primary-600">
            ${product.price}
          </span>
          <span className="text-xl text-gray-500 line-through">
            ${product.price}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`w-5 h-5 ${
                  star <= Math.floor(4.5) ? "text-accent-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-600">
            {4.5} ({100} reseñas)
          </span>
        </div>
      </div>

      {/* Descripción */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Descripción
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Poner aqui la descripcion del producto
        </p>
      </div>

      {/* Almacenamiento */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Almacenamiento
        </h3>
        <div className="flex flex-wrap gap-2">
          {["128GB", "256GB", "512GB", "1TB"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors ${
                selectedSize === size
                  ? "text-white border-transparent bg-primary-600"
                  : "text-gray-700 border-gray-300 hover:border-primary-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Cantidad */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cantidad</h3>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-primary-300 transition-colors"
          >
            <FaMinus />
          </button>
          <span className="text-xl font-semibold text-gray-900 min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-primary-300 transition-colors"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          className="w-full btn-primary py-4 px-6"
        >
          Agregar al carrito
        </button>
        <button
          onClick={handleBuyNow}
          className="w-full py-4 px-6 rounded-lg font-semibold border-2 border-primary-600 text-primary-600 transition-colors hover:bg-primary-50"
        >
          Comprar ahora
        </button>
      </div>

      {/* Información de envío y garantía */}
      <div className="bg-white rounded-lg shadow-card p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <FaTruck className="text-primary-600" />
            <span className="text-gray-700">Envío gratis</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUndo className="text-primary-600" />
            <span className="text-gray-700">30 días devolución</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheck className="text-primary-600" />
            <span className="text-gray-700">En stock</span>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="border-t border-gray-200 pt-6">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <span className="font-semibold">Envío:</span> Gratis en pedidos
            superiores a $50
          </div>
          <div>
            <span className="font-semibold">Devoluciones:</span> 30 días
          </div>
          <div>
            <span className="font-semibold">Disponibilidad:</span> En stock
          </div>
          <div>
            <span className="font-semibold">SKU:</span> IPH-15PM-256
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
