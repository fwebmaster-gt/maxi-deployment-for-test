import type { Metadata } from "next";
import "./globals.css";

// metadata por defecto para todas las paginas
export const metadata: Metadata = {
  title: "Maxicompra",
  description:
    "Maxicompra es un ecommerce de productos de tecnología y electrónica.",
};

// layout por defecto para todas las paginas (GLOBAL)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
