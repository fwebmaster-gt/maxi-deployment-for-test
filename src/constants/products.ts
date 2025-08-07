export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isNew: boolean;
  discount: number;
  slug: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.8,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    category: "Smartphones",
    isNew: true,
    discount: 13,
    slug: "iphone-15-pro-max",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 999.99,
    originalPrice: 1199.99,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    category: "Laptops",
    isNew: false,
    discount: 17,
    slug: "macbook-air-m2",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24",
    price: 899.99,
    originalPrice: 999.99,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    category: "Smartphones",
    isNew: true,
    discount: 10,
    slug: "samsung-galaxy-s24",
  },
  {
    id: 4,
    name: "iPad Pro 12.9",
    price: 1099.99,
    originalPrice: 1299.99,
    rating: 4.6,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    category: "Tablets",
    isNew: false,
    discount: 15,
    slug: "ipad-pro-12.9",
  },
  {
    id: 5,
    name: "AirPods Pro 2",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.5,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    category: "Audio",
    isNew: false,
    discount: 17,
    slug: "airpods-pro-2",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: 399.99,
    originalPrice: 449.99,
    rating: 4.4,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    category: "Wearables",
    isNew: true,
    discount: 11,
    slug: "apple-watch-series-9",
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Audio",
    isNew: false,
    discount: 13,
    slug: "sony-wh-1000xm5",
  },
  {
    id: 8,
    name: "Dell XPS 13",
    price: 1199.99,
    originalPrice: 1399.99,
    rating: 4.3,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    category: "Laptops",
    isNew: false,
    discount: 14,
    slug: "dell-xps-13",
  },
];

export const categories = [
  "Todos",
  "Smartphones",
  "Laptops",
  "Tablets",
  "Audio",
  "Wearables",
  "Celulares",
  "Belleza",
  "Juguetes",
  "Libros"
];

export const phrases = [
  "Pedi facil y rapido",
  "Envíos rápidos a toda Guatemala",
  "Precios bajos garantizados",
  "Compra segura y protegida ",
  "Variedad de productos de calidad",
  "Atención al cliente personalizada"
]

// Función para obtener productos destacados (primeros 4)
export const getFeaturedProducts = () => products.slice(0, 4);

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string) => {
  if (category === "Todos") return products;
  return products.filter(product => product.category === category);
};

// Función para buscar productos
export const searchProducts = (searchTerm: string) => {
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}; 