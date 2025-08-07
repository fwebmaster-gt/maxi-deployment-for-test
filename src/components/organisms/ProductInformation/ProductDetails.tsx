import ProductGallery from "@/components/molecules/ProductGallery";
import ProductInformation from "@/components/organisms/ProductInformation";
import { productService } from "@/services/products/services";
import ErrorState from "@/components/organisms/ProductInformation/ErrorState";

type ProductDetailsProps = {
  slug: string;
};

const ProductDetails = async ({ slug }: ProductDetailsProps) => {
  const productResult = await productService.getProduct(slug);

  if (!productResult.ok) {
    return (
      <ErrorState
        title="Error al obtener el producto"
        message="No se pudo cargar la información del producto. Por favor, verifica tu conexión e intenta nuevamente."
        variant="product"
      />
    );
  }

  const product = productResult.data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de imágenes */}
        <ProductGallery product={product} />

        {/* Información del producto */}
        <ProductInformation product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
