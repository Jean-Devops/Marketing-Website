{/*import { Heart } from 'lucide-react';*/}
import { Figure } from '../types';

interface ProductCardProps {
  product: Figure;
  onClick: (product: Figure) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {

  const formattedPrice = product.price.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL', 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  });

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => onClick(product)}
    >

      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      {/* FUTURE FEAT: Adicionando um coração para marcar favoritos com local storage */}
       {/* {product.featured && (
          <div className="absolute top-2 right-2">
            <Heart className="text-pink-500 fill-pink-500" size={24} />
          </div>
        )}*/}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-pink-600">
            {formattedPrice}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm ${product.available
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
            }`}>
            {product.available ? 'Disponível' : 'Indisponível'}
          </span>
        </div>
      </div>
    </div>

  );
};