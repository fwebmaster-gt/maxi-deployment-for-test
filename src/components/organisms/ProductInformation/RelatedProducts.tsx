import ProductCard from "@/components/molecules/ProductCard";
import { productService } from "@/services/products/services";
import ErrorState from "@/components/organisms/ProductInformation/ErrorState";

const RelatedProducts = async ({ slug }: { slug: string }) => {
  const relatedProductsResult = await productService.getRelatedProducts(slug);

  if (!relatedProductsResult.ok) {
    return (
      <ErrorState
        title="Error al obtener productos relacionados"
        message="No se pudieron cargar los productos relacionados. Esto no afecta la visualización del producto principal."
        variant="related"
      />
    );
  }

  const products = relatedProductsResult.data;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-4">Productos relacionados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
