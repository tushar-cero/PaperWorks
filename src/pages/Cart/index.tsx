// ----- Library Imports
import React, {useCallback, useContext} from 'react'
import { Link } from 'react-router-dom';

// ----- Utility Imports
import { Product } from '../../types';
import allProducts from '../../locale/productData.json';
import translationJSON from '../../locale/translation.json';
import { CartContext } from '../../App';

// ----- Component Imports
import { Header } from '../../components/Header';
import { CartProductCard } from '../../components/CardProductCard';
import { RightArrow } from '../../assets/svgicons';

export const Cart = useCallback(() => {

  const cart_context = useContext(CartContext);
  
  if (!cart_context) {
    return <div>Error: Cart context not found</div>;
  }
  const { cartItemsArray, addToCart, removeFromCart, handleQuantity, getQuantityById } = cart_context;

  const filteredData = allProducts.products.filter((item: Product) => {
    return cartItemsArray.find((cartItemsArray: any) => cartItemsArray.id === item.id) !== undefined;
  });
  const totalPrice = filteredData.reduce((total, product) => {
    const cartItem = cartItemsArray.find((item) => item.id === product.id);
    return total + (cartItem?.quantity || 0) * product.price;
  }, 0);

  return (
    <>
      <Header hideCart={true} />
      <section className="bg-white py-8 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
              {(filteredData.length > 0) ? filteredData.map(product => (
                <CartProductCard 
                  key={product.id}
                  product={product}
                  quantity={getQuantityById(product.id)}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart} 
                  handleQuantity={handleQuantity}
                />
              )) : <div>There is nothing in your cart</div> }
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-xl font-semibold text-gray-900">Order summary</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">Original price</dt>
                      <dd className="text-base font-medium text-gray-900">$ {totalPrice}</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">Discount</dt>
                      <dd className="text-base font-medium text-gray-900">FLAT 10%</dd>
                    </dl>
                  </div>

                  <hr/>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">$ {totalPrice*0.9}</dd>
                  </dl>
                </div>

                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">{translationJSON.buttons.proceedToCheckout}</a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500"> or </span>
                  <Link to="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline">
                  {translationJSON.buttons.continueShopping}
                    <RightArrow/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}, []);