export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryInProduct;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface CategoryInProduct {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
