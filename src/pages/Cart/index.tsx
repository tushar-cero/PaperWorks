import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import allProducts from '../../locale/productData.json';
import CartProductCard from '../../components/CardProductCard';
import { Product } from '../../types';
import { CartContext } from '../../App';

export const Cart = () => {

  const cart_context = useContext(CartContext);
  
  if (!cart_context) {
    return <div>Error: Cart context not found</div>;
  }
  const { cartItemsArray, removeFromCart } = cart_context;


  const filteredData = allProducts.products.filter((item: Product) => {
    return cartItemsArray.find((cartItemsArray: any) => cartItemsArray.id === item.id) !== undefined;
  });

  return (
    <>
      <Header hideCart={true} />
      <section className="bg-white py-8 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
              {filteredData.map(product => (
                <CartProductCard key={product.id} product={product} removeFromCart={removeFromCart} />
              ))}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-xl font-semibold text-gray-900">Order summary</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">Original price</dt>
                      <dd className="text-base font-medium text-gray-900">$7,592.00</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">Savings</dt>
                      <dd className="text-base font-medium text-green-600">-$299.00</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-5000">Store Pickup</dt>
                      <dd className="text-base font-medium text-gray-900">$99</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500">Tax</dt>
                      <dd className="text-base font-medium text-gray-900">$799</dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-bold text-gray-900">Total</dt>
                    <dd className="text-base font-bold text-gray-900">$8,191.00</dd>
                  </dl>
                </div>

                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Proceed to Checkout</a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500"> or </span>
                  <Link to="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline">
                    Continue Shopping
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};