import { apiServer } from "@/services/config";
import { Product } from "@/services/products/model";

export const productService = {
  getProducts: async () =>
    await apiServer.get<Product[]>("products", {
      nextOptions: {
        revalidate: 150, // 2.5 minutes (No usar 60 * 60 * 24)
        tags: ["products"], // tags unicos por si necesitamos hacer revalidacion manual en algun momento
      },
    }),
  getProduct: async (slug: string) =>
    await apiServer.get<Product>(`products/slug/${slug}`, {
      nextOptions: {
        revalidate: 300, // 5 minutes
        tags: ["product-details", slug],
      },
    }),
  getRelatedProducts: async (slug: string) =>
    await apiServer.get<Product[]>(`products/slug/${slug}/related`, {
      nextOptions: {
        revalidate: 300, // 5 minutes
        tags: ["related-products", slug],
      },
    }),
};
