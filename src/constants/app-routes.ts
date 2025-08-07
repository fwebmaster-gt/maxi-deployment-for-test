export const appRoutes = {
  home: "/",
  product: (slug: string, sku: string) => `/${slug}?sku=${sku}`,
  products: "/productos",
  categorias: "/categorias",
};
