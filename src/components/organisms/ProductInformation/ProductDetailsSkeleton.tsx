const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skeleton de la galería de imágenes */}
        <div className="space-y-4">
          {/* Imagen principal */}
          <div className="aspect-square bg-gray-200 rounded-lg skeleton-shimmer">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skeleton de la información del producto */}
        <div className="space-y-6">
          {/* Badges */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          </div>

          {/* Título */}
          <div className="space-y-2">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2"></div>
          </div>

          {/* Precio */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-24"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="w-5 h-5 bg-gray-200 rounded animate-pulse"
                  style={{ animationDelay: `${star * 0.05}s` }}
                ></div>
              ))}
            </div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
          </div>

          {/* Descripción */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="space-y-1">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
            </div>
          </div>

          {/* Almacenamiento */}
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((size) => (
                <div
                  key={size}
                  className="w-16 h-10 bg-gray-200 rounded-lg animate-pulse"
                  style={{ animationDelay: `${size * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Cantidad */}
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-24"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="w-12 h-10 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          {/* Información de envío y garantía */}
          <div className="bg-white rounded-lg shadow-card p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Información adicional */}
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-1">
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-24"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton; 