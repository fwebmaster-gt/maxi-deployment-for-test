import ProductGallery from "@/components/molecules/ProductGallery";
import ProductInformation from "@/components/organisms/ProductInformation";
import { products } from "@/constants/products";
import React from "react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/molecules/ProductCard";
import { Metadata } from "next";

// Remplazar con llamada al servicio real
async function getProduct(slug: string) {
  const product = products.find((product) => product.slug === slug);
  return product;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "No encontrado | Maxicompra",
      description: "No está disponible.",
    };
  }

  return {
    title: `${product.name} | Maxicompra`,
    description: `Descubre ${product.name} en Maxicompra. ${product.price ? `Precio: $${product.price.toFixed(2)}` : ''}`,
    openGraph: {
      title: `${product.name} | Maxicompra`,
      description: `Descubre ${product.name} en Maxicompra`,
      images: [product.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Maxicompra`,
      description: `Descubre ${product.name} en Maxicompra`,
      images: [product.image],
    },
  };
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return notFound();
  }

  const features = [
    "Chip A17 Pro con GPU de 6 núcleos",
    "Cámara principal de 48MP con estabilización óptica",
    "Pantalla Super Retina XDR de 6.7 pulgadas",
    "Diseño en titanio de grado aeroespacial",
    "Resistente al agua y polvo (IP68)",
    "Carga inalámbrica MagSafe",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con color del tema */}
      <div className="bg-gradient-primary h-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galería de imágenes */}
          <ProductGallery product={product} />

          {/* Información del producto */}
          <ProductInformation product={product} features={features} />
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Productos relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

       {/* Productos de la misma marca */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Productos de la misma marca</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
