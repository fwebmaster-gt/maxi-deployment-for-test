import { Metadata } from "next";
import { productService } from "@/services/products/services";
import RelatedProducts from "@/components/organisms/ProductInformation/RelatedProducts";
import ProductDetails from "@/components/organisms/ProductInformation/ProductDetails";
import ProductDetailsSkeleton from "@/components/organisms/ProductInformation/ProductDetailsSkeleton";
import RelatedProductsSkeleton from "@/components/organisms/ProductInformation/RelatedProductsSkeleton";
import { Suspense } from "react";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sku: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { sku } = await searchParams;

  console.log("sku", sku); // puedes acceder a los parametros de la url y usarlos para obtener el producto
  const productResult = await productService.getProduct(slug);

  if (!productResult.ok) {
    return {
      title: "No encontrado | Maxicompra",
      description: "No está disponible.",
    };
  }

  const product = productResult.data;

  return {
    title: `${product.title} | Maxicompra`,
    description: `Descubre ${product.title} en Maxicompra. ${
      product.price ? `Precio: $${product.price.toFixed(2)}` : ""
    }`,
    openGraph: {
      title: `${product.title} | Maxicompra`,
      description: `Descubre ${product.title} en Maxicompra`,
      images: [product.images[0]],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Maxicompra`,
      description: `Descubre ${product.title} en Maxicompra`,
      images: [product.images[0]],
    },
  };
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetails slug={slug} />
      </Suspense>
      <Suspense fallback={<RelatedProductsSkeleton />}>
        <RelatedProducts slug={slug} />
      </Suspense>
    </div>
  );
};

export default ProductPage;
