import CoverPage from "@/components/organisms/CoverPage";
import FeaturedProducts from "@/components/organisms/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <CoverPage
        title="Aprovecha Nuestras Ofertas Exclusivas Con Tu!!!"
        description="Descubre nuestra increíble colección de productos con el mejor servicio al cliente"
        buttonText="Ver Productos"
        offerTitle="BONO 18"
        offerDescription="¡Maximiza tu bono con nuestras super ofertas!"
        buttonLink="/productos"
      />

      <FeaturedProducts />
    </div>
  );
}
