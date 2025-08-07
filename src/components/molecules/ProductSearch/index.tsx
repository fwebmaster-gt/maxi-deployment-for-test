"use client";

import { useState } from "react";

import Link from "next/link";
import { Product, searchProducts } from "@/constants/products";
import { appRoutes } from "@/constants/app-routes";

export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length >= 3) {
      const found = searchProducts(value);
      setResults(found);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {results.length > 0 && (
        <ul className="absolute z-10 bg-white border mt-1 w-full max-h-60 overflow-y-auto rounded-md shadow">
          {results.map((product) => (
            <li key={product.id}>
              <Link
                href={`${appRoutes.product(
                  product.slug,
                  product.id.toString() // pasar sku a futuro
                )}`}
              >
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {product.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
