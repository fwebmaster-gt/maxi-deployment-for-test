const RelatedProductsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Título */}
      <div className="h-8 bg-gray-200 rounded animate-pulse w-64 mb-4"></div>
      
      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((product) => (
          <div 
            key={product} 
            className="product-card"
            style={{ animationDelay: `${product * 0.15}s` }}
          >
            {/* Imagen del producto */}
            <div className="relative">
              <div className="w-full h-48 bg-gray-200 rounded-t-lg skeleton-shimmer">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg"></div>
              </div>

              {/* Botones de acción */}
              <div className="absolute top-2 right-2 flex flex-col space-y-1">
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Información del producto */}
            <div className="p-4 space-y-3">
              {/* Título */}
              <div className="space-y-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="w-4 h-4 bg-gray-200 rounded animate-pulse"
                    style={{ animationDelay: `${star * 0.05}s` }}
                  ></div>
                ))}
              </div>

              {/* Precio */}
              <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>

              {/* Botón */}
              <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsSkeleton; 