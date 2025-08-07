import Link from "next/link";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { appRoutes } from "@/constants/app-routes";
import { Product } from "@/services/products/model";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div key={product.id} className="product-card group">
      {/* Imagen del producto */}
      <div className="relative">
        <img
          src={product.images[0] ?? "https://placehold.co/600x400"}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

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
        {/* En lugar del id pasar el parametro sku correcto */}
        <Link href={appRoutes.product(product.slug, product.id.toString())}>
          <h3 className="cursor-pointer font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(4.5) ? "text-accent-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Precios */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>
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
