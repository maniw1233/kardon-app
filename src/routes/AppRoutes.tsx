import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

// Placeholder components for new routes
const MobileCovers = () => <h2>Mobile Covers Page</h2>;
const Offer = () => <h2>Offer Page</h2>;
const Category = ({ categorySlug }: { categorySlug: string }) => (
  <h2>Category: {categorySlug}</h2>
);

const CategoryWrapper = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  return <Category categorySlug={categorySlug || ''} />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/mobile-covers" element={<MobileCovers />} />
    <Route path="/offer" element={<Offer />} />
    <Route path="/category/:categorySlug" element={<CategoryWrapper />} />
  </Routes>
);

export default AppRoutes;
