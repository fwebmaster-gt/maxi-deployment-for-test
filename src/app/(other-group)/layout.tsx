import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maxicompra ADMIN",
  description: "Maxicompra ADMIN",
};

// layout por defecto para todas las paginas del grupo (OTHER-GROUP) creado para pruebas
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="flex">
          <div className="w-64 bg-blue-500">Sidebar for admin</div>
          {children}
        </div>
      </body>
    </html>
  );
}
