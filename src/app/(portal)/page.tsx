import { Suspense } from "react";
import WhyMaxicomra from "@/components/organisms/WhyMaxicompra";
import { phrases } from "@/constants/products";
import FeaturedProductsLoading from "@/components/organisms/FeaturedProducts/loading";
import FeaturedProducts from "@/components/organisms/FeaturedProducts";

// en paginas como el home (donde pueden haber multiples llamados a la api a diferentes endpoints)
// se puede usar un "suspense general" creando un archivo de loading.tsx en el mismo directorio
export default function Home() {
  return (
    <div>
      <div className="pt-4">
        <WhyMaxicomra phrases={phrases} />
      </div>

      <Suspense fallback={<FeaturedProductsLoading />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}
