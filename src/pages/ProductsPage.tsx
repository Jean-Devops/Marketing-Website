import { useState } from 'react';
import { Figure, FilterOptions } from '../types';
import { products } from '../data/figure';
import { ProductCard } from '../components/ProductCard';
import { Filters } from '../components/Filters';
import { ProductModal } from '../components/ProductModal';
import { OrderContact } from '../components/OrderContact';
import { Link } from 'react-router-dom';

export const ProductsPage = () => {
    const [filters, setFilters] = useState<FilterOptions>({});
    const [selectedProduct, setSelectedProduct] = useState<Figure | null>(null);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredProducts = products.filter(product => {
        if (filters.name && !product.name.toLowerCase().includes(filters.name.toLowerCase())) {
            return false;
        }
        if (filters.maker && product.maker !== filters.maker) {
            return false;
        }
        if (filters.material && product.material !== filters.material) {
            return false;
        }
        if (filters.collection && product.collection !== filters.collection) {
            return false;
        }
        return true;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => Number(b.available) - Number(a.available));
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex min-h-screen">

                        <div className="flex-1 p-2">
                            
                            <section className="mb-8">
                                <Filters filters={filters} onFilterChange={setFilters} />
                            </section>

                            
                            <section className="max-w-8xl mx-auto lg:px-0 py-1 flex justify-between">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Todos os Produtos
                                </h2>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    <Link to="/marketing-website" className="text-gray-900">
                                        Home
                                    </Link>
                                </h2>
                            </section>

                            
                            <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {paginatedProducts.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onClick={setSelectedProduct}
                                    />
                                ))}
                            </section>

                            
                            <div className="flex justify-center space-x-2 mt-6">
                                <button
                                    className={`px-4 py-2 border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                >
                                    Anterior
                                </button>
                                <span className="px-4 py-2 border">{currentPage} / {totalPages}</span>
                                <button
                                    className={`px-4 py-2 border ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                >
                                    Próximo
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                        >
                            Voltar ao Topo
                        </button>
                    </div>
                </div>

                {selectedProduct && !showOrderForm && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        onOrder={() => setShowOrderForm(true)}
                    />
                )}

                {selectedProduct && showOrderForm && (
                    <OrderContact
                        product={selectedProduct}
                        onClose={() => setShowOrderForm(false)}
                    />
                )}
            </main>
        </>
    );
};
