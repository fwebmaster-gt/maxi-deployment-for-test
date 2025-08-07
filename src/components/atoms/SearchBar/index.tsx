'use client'

import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-full bg-white py-2 pl-4 pr-12 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-shadow duration-200 shadow-sm"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-600 hover:bg-primary-700 p-2 text-white transition-colors"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
