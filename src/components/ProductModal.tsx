import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Figure } from '../types';

interface ProductModalProps {
  product: Figure;
  onClose: () => void;
  onOrder: (product: Figure) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOrder }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const formattedPrice = product.price.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL', 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} - Imagem ${currentImageIndex + 1}`}
            className="h-2x1 object-cover"
          />

          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <span className="text-gray-500 block">Coleção</span>
              <span className="font-medium">{product.collection}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Fabricante</span>
              <span className="font-medium">{product.maker}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Material</span>
              <span className="font-medium">{product.material}</span>
            </div>
            <div>
              {product.height && (
                <div>
                  <span className="text-gray-500 block">Altura</span>
                  <span className="font-medium">{product.height + " cm"}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-pink-600">
              {formattedPrice}
            </span>
            <button
              onClick={() => onOrder(product)}
              className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              {product.available ? 'Comprar Agora' : 'Encomendar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};