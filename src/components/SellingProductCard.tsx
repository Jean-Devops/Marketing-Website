import { useRef } from "react";
import { Figure } from "../types";
import { ProductCard } from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

interface ProductCarouselProps {
  products: Figure[];
  onClick: (product: Figure) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, onClick }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="max-w-8xl mx-auto lg:px-0 py-1 flex justify-between">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Mais Vendidas
        </h2>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          <Link to="/marketing-website/allproducts" className="text-gray-900">
            Ver Todas
          </Link>
        </h2>
      </section>
      <div className="relative w-full">
       
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          onClick={scrollLeft}
        >
          <ChevronLeft size={24} />
        </button>
        
        <div ref={carouselRef} className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 p-2">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[300px]">
              <ProductCard product={product} onClick={onClick} />
            </div>
          ))}
        </div>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          onClick={scrollRight}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
<div className="text-center mt-4">

</div>