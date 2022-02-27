
import './App.css';
import Rutas from './routes';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <div className="App">      
      <CartProvider>
        <Rutas/>
      </CartProvider>
    </div>
  );
}

export default App;
