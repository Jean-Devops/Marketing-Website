import { useState } from 'react';
import { Figure, FilterOptions } from '../types';
import { products } from '../data/figure';
import { ProductCard } from '../components/ProductCard';
import { Filters } from '../components/Filters';
import { ProductModal } from '../components/ProductModal';
import { OrderContact } from '../components/OrderContact';
import { Carousel } from '../components/Carousel';
import { ProductCarousel } from '../components/SellingProductCard';
import { Link } from 'react-router-dom';

export const IndexPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({});
  const [selectedProduct, setSelectedProduct] = useState<Figure | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const carouselProducts = products.sort((a, b) => Number(b.available) - Number(a.available));

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

  /*const handleOrder = (formData: any) => {
    console.log('Order placed:', { product: selectedProduct, ...formData });
    setShowOrderForm(false);
    setSelectedProduct (null);
    alert('Pedido realizado com sucesso! Entraremos em contato em breve.');
  };*/

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <section className="mb-8">
            <Filters filters={filters} onFilterChange={setFilters} />
          </section>

          <section className="max-w-8xl mx-auto lg:px-0 py-1 flex justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Seleção Rápida
            </h2>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              <Link to="/marketing-website/allproducts" className="text-gray-900">
                Ver Todas
              </Link>
            </h2>
          </section>

          <section className=" mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, 3).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </section>

          <section className="mb-10">
            <Carousel />
          </section>

          <section className="mb-10">
            <ProductCarousel
              products={carouselProducts.filter(product => product.selling).slice(0, 6)}
              onClick={setSelectedProduct}
            />
          </section>

          <section className="flex justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              Voltar ao Topo
            </button>
          </section>
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