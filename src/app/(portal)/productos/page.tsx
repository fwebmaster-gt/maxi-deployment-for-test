import ProductsTemplate from "@/components/templates/ProductsTemplate";
import { products, categories } from "@/constants/products";

const ProductsPage = async () => {
  return <ProductsTemplate products={products} categories={categories} />;
};

export default ProductsPage;
