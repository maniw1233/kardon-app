import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <p>{item.title} x {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
          <Link to="/checkout" className="bg-blue-600 text-white px-4 py-2 rounded inline-block mt-2">Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
