import { Product } from "@/constants/products";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div key={product.id} className="product-card group">
      {/* Imagen del producto */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && <span className="badge-accent">Nuevo</span>}
          {product.discount > 0 && (
            <span className="badge-primary">-{product.discount}%</span>
          )}
        </div>

        {/* Botones de acción */}
        <div className="absolute top-2 right-2 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
            <FaHeart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
            <FaShoppingCart className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Información del producto */}
      <div className="p-4">
        <Link href={`/${product.slug}`}>
          <h3 className="cursor-pointer font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-accent-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            ({product.reviews})
          </span>
        </div>

        {/* Precios */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Botón de agregar al carrito este boton se puede separar a futuro para que sea cliente el boton y no bloquee el ssr */}
        <button className="w-full btn-primary hover:shadow-lg transform hover:-translate-y-0.5">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
