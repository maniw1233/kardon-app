import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import axios from 'axios';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Welcome to Kardon"
        subtitle="Explore premium quality mobile covers and exclusive arts to elevate your style."
        backgroundImageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
        ctaText="Shop Now"
        ctaLink="/mobile-covers"
      />

      {/* Featured Products Section */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
