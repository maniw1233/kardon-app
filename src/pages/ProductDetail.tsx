import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../types';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <img src={product.image} alt={product.title} className="h-60 object-contain" />
      <h1 className="text-xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
      <button onClick={() => addToCart(product)} className="bg-green-600 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
