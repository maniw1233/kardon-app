import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const moreMenuItems = [
    'Snap Case',
    'Glossy Metal TPU Case',
    'MousePad',
    'Keychain',
    'Just Arrived',
    'PowerBank',
    'Plain T-shirts',
    'Acrylic Wall Art',
    'Canvas Painting',
    'Exclusive Arts',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to search results page or category page
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          Kardon
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 relative">

          <Link to="/mobile-covers" className="hover:text-green-600 font-medium">
            Mobile Cover
          </Link>

          {/* More dropdown */}
          <div
            className="relative"
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center font-medium hover:text-green-600 focus:outline-none"
              type="button"
            >
              More
              <svg
                className="ml-1 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z" />
              </svg>
            </button>

            {moreOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
                {moreMenuItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 hover:bg-green-100 hover:text-green-700"
                      onClick={() => setMoreOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/offer" className="hover:text-green-600 font-medium">
            Offer
          </Link>

          {/* Search form */}
          <form onSubmit={handleSearchSubmit} className="flex items-center ml-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-l px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-r"
              aria-label="Search"
            >
              🔍
            </button>
          </form>

          {/* Cart button */}
          <Link
            to="/cart"
            className="ml-6 text-green-700 hover:text-green-900 relative"
            aria-label="Cart"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {/* Optional: You can add a cart item count badge here */}
            {/* <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs px-1">3</span> */}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
