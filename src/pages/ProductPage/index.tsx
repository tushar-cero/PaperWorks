import React, { useState } from 'react';
import Header from '../../components/Header';
import ListingPage from '../../components/ListingPage';
import allProducts from '../../locale/productData.json';
import { CartItems } from '../../types';

export const ProductPage = () => {

  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const handleAddtoCart = (id: string) => {
    const itemExists = cartItems.find(item => item.id === id);
    if (!itemExists)
      setCartItems(prevItems => [...prevItems, { id }]);
  };

  return (
    <>
      <Header cartItems={cartItems.length} />
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ListingPage 
            productsData={allProducts.products}
            handleAddtoCart={handleAddtoCart}
          />
        </div>
      </section>
    </>
  )
}
