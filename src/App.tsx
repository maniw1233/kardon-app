import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <footer className="bg-gray-100 p-4 text-center">© 2025 MyShop</footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
