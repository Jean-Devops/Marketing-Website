import React from 'react';
import { Search } from 'lucide-react';
import { FilterOptions } from '../types';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const makers = ['Hot Toys', 'S.H. Figuarts', 'Fictional Figures Inc.', 'Mafex', 'Neca'];
  const collections = ["Caçadores Cósmicos", "Defensores Digitais",
    "Heróis Galácticos",
    "Heróis da Justiça",
    "Vilões do Submundo",
    "Lendas do Multiverso",
    "Caçadores Noturnos"];
  const materials = ['PVC', 'Resina', 'Metálico', 'ABS'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar por nome..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.name || ''}
          onChange={(e) => onFilterChange({ ...filters, name: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <select
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.maker || ''}
          onChange={(e) => onFilterChange({ ...filters, maker: e.target.value })}
        >
          <option value="">Fabricante</option>
          {makers.sort().map(maker => (
            <option key={maker} value={maker}>{maker}</option>
          ))}
        </select>

        <select
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.collection || ''}
          onChange={(e) => onFilterChange({ ...filters, collection: e.target.value })}
        >
          <option value="">Coleção</option>
          {collections.sort().map(collection => (
            <option key={collection} value={collection}>{collection}</option>
          ))}
        </select>

        <select
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          value={filters.material || ''}
          onChange={(e) => onFilterChange({ ...filters, material: e.target.value })}
        >
          <option value="">Material</option>
          {materials.sort().map(material => (
            <option key={material} value={material}>{material}</option>
          ))}
        </select>

      </div>

      <div className="relative mt-4">
      <button
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
          onClick={() => onFilterChange({ ...filters, maker: '', collection: '', material: '', name: '' })}
        >
          Limpar Filtros
        </button>

      </div>

    </div>
  );
};