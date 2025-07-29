import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative flex-1 max-w-md">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-200 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
