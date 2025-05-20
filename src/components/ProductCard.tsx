import { Product } from '../types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-sm">{product.category}</p>
      <p className="font-semibold">${product.price}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-3 py-1 rounded">Add to Cart</button>
        <Link to={`/product/${product.id}`} className="text-blue-600 underline">View</Link>
      </div>
    </div>
  );
};

export default ProductCard;
