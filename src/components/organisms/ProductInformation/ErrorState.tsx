import { FaExclamationTriangle, FaSync } from "react-icons/fa";

type ErrorStateProps = {
  title: string;
  message: string;
  onRetry?: () => void;
  variant?: "product" | "related";
};

const ErrorState = ({ title, message, onRetry, variant = "product" }: ErrorStateProps) => {
  const minHeight = variant === "product" ? "min-h-[400px]" : "min-h-[200px]";
  
  return (
    <div className={`text-center flex items-center justify-center ${minHeight}`}>
      <div className="space-y-6 max-w-md mx-auto px-4">
        {/* Icono de error */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <FaExclamationTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-2">
          <h3 className={`font-semibold text-gray-900 ${
            variant === "product" ? "text-2xl" : "text-xl"
          }`}>
            {title}
          </h3>
          <p className="text-gray-500 leading-relaxed">
            {message}
          </p>
        </div>

        {/* Botón de reintentar */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <FaSync className="w-4 h-4" />
            <span>Reintentar</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState; 