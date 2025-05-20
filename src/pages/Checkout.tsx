import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <ul className="mb-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.title} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="text-right font-bold">Total: ${total.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            required
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength={16}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
