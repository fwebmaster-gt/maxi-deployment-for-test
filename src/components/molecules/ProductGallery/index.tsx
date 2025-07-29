import { Product } from "@/constants/products";

type ProductGalleryProps = {
  product: Product;
};

const ProductGallery = ({ product }: ProductGalleryProps) => {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-white rounded-lg shadow-card overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-gradient-secondary bg-opacity-10">
          <img
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="aspect-square bg-white rounded-lg shadow-sm border-2 border-gray-200 hover:border-primary-300 cursor-pointer transition-colors"
          >
            <div className="w-full h-full flex items-center justify-center bg-secondary-50">
              <div className="w-8 h-8 rounded-full bg-primary-600"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
