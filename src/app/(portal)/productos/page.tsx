import ProductsTemplate from "@/components/templates/ProductsTemplate";
import { productService } from "@/services/products/services";

const ProductsPage = async () => {
  const productsResult = await productService.getProducts();

  if (!productsResult.ok) {
    return <div>Error al obtener los productos</div>;
  }

  const products = productsResult.data;
  return <ProductsTemplate products={products} />;
};

export default ProductsPage;
