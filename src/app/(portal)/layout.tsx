import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { categories } from "@/constants/products";

// layout por defecto para todas las paginas del portal
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: get categories from backend with ssr
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <Navbar categories={categories} />

        {children}
        <Footer />
      </body>
    </html>
  );
}
