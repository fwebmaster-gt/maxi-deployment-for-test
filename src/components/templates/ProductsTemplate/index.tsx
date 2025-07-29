"use client";

import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductCard from "@/components/molecules/ProductCard";
import Pagination from "@/components/molecules/Pagination";
import SearchBar from "@/components/atoms/SearchBar";
import { Product } from "@/constants/products";

type ProductsTemplateProps = {
  products: Product[];
  categories: string[];
};

const ProductsTemplate = ({ products, categories }: ProductsTemplateProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar productos
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? 1 : -1;
      default:
        return b.reviews - a.reviews; // popular
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-primary-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg">
                Nuestros Productos
              </h1>
              <p className="text-xl text-red-100 font-medium max-w-2xl">
                Descubre la mejor tecnología al mejor precio
              </p>
            </div>
            <div className="bono-highlight transform hover:scale-105 transition-transform duration-300">
              BONO 14
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barra de herramientas */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          {/* Búsqueda */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Filtros móviles */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:border-primary-300 transition-all duration-200"
            >
              <FaFilter className="mr-2 text-primary-600" />
              <span className="font-medium text-gray-700">Filtros</span>
            </button>
          </div>

          {/* Ordenar por */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-semibold">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-200 shadow-sm bg-white"
            >
              <option value="popular">Más populares</option>
              <option value="price-low">Precio: menor a mayor</option>
              <option value="price-high">Precio: mayor a menor</option>
              <option value="rating">Mejor valorados</option>
              <option value="newest">Más nuevos</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros laterales */}
          <div
            className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Categorías
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                      selectedCategory === category
                        ? "bg-primary-600 text-white shadow-md"
                        : "hover:bg-primary-50 hover:text-primary-700 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Precio
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-700 hover:text-primary-700 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-3 text-primary-600 focus:ring-primary-600 focus:ring-2 rounded"
                    />
                    Menos de $500
                  </label>
                  <label className="flex items-center text-gray-700 hover:text-primary-700 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-3 text-primary-600 focus:ring-primary-600 focus:ring-2 rounded"
                    />
                    $500 - $1000
                  </label>
                  <label className="flex items-center text-gray-700 hover:text-primary-700 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-3 text-primary-600 focus:ring-primary-600 focus:ring-2 rounded"
                    />
                    Más de $1000
                  </label>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Estado
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center text-gray-700 hover:text-primary-700 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-3 text-primary-600 focus:ring-primary-600 focus:ring-2 rounded"
                    />
                    Nuevos
                  </label>
                  <label className="flex items-center text-gray-700 hover:text-primary-700 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      className="mr-3 text-primary-600 focus:ring-primary-600 focus:ring-2 rounded"
                    />
                    Con descuento
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Grid de productos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Paginación */}
            <Pagination
              totalPages={10}
              currentPage={1}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTemplate;
