"use client";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  // Generar array de páginas a mostrar
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Si hay pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para mostrar páginas con ellipsis
      if (currentPage <= 3) {
        // Páginas iniciales
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Páginas finales
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Páginas intermedias
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center space-x-2">
        {/* Botón Anterior */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-gray-500 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Anterior
        </button>

        {/* Números de página */}
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() =>
              typeof page === "number" ? onPageChange(page) : null
            }
            disabled={typeof page !== "number"}
            className={`px-4 py-2 rounded-lg transition-colors font-medium ${
              page === currentPage
                ? "bg-primary-600 text-white shadow-md hover:bg-primary-700"
                : typeof page === "number"
                ? "text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                : "text-gray-400 cursor-default"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Botón Siguiente */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-gray-500 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Siguiente
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
