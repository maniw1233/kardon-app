import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* About */}
        <div>
          <h4 className="font-bold mb-3 text-lg">About Kardon</h4>
          <p>
            Kardon is your trusted online store delivering the best products with top quality and service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-400 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-400 transition">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-gray-400 transition">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-3 text-lg">Contact Us</h4>
          <p>Email: support@kardon.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Market Street, Bangalore, India</p>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Kardon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
