import Navbar from "@/components/Navbar";
import { categories } from "@/constants/products";

// layout por defecto para todas las paginas del portal
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <Navbar categories={categories} />

        {children}
      </body>
    </html>
  );
}
