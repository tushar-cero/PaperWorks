import { RouterProvider } from "react-router-dom";
import { CartProvider } from './context/cartContext';
import { router } from './utils/routes';

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
