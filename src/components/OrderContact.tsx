import React from 'react';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; 
import { Figure } from '../types';
import { Link } from 'react-router-dom';

interface OrderContactProps {
  product: Figure;
  onClose: () => void;
}

export const OrderContact: React.FC<OrderContactProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {product.available ? 'Finalizar Compra' : 'Realizar Encomenda'}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 p-2">Informações do Produto</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-gray-600">R$ {product.price.toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-s font-medium text-gray-700 mb-1 p-2">
                Para encomendar o produto, entre em contato por e-mail ou telefone:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                <p className="text-gray-600">Telefone: <Link to="/"  className="text-pink-600" target="_blank">+55 41 0800 9696-989</Link></p>
                  <p className="text-gray-600">E-mail: <span className="text-pink-600">epic.figure.studio@gmail.com</span></p>
                </div>
                <a href="/" target="_blank" className="text-green-600">
                  <FaWhatsapp size={34} />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mt-4 p-2">
                No momento não temos opção de encomenda direta, utilizamos apenas para divulgação dos produtos. Para realizar sua compra ou encomenda, entre em contato pelo email ou número. Após entrar em contato, você receberá mais detalhes sobre a encomenda. Agradecemos por sua preferência!
              </p>
            </div>
          </div>
        </div>
<div className="flex flex-col items-center">        <button
          onClick={onClose}
          className="w-[30vh] justify-center content-end mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          Fechar
        </button></div>

      </div>
    </div>
  );
};
