// ----- Library Imports
import React, {useCallback, useContext} from 'react';

// ----- Utility Imports
import allProducts from '../../locale/productData.json';
import { CartContext } from '../../App';

// ----- Component Imports
import { Header } from '../../components/Header';
import { ListingPage } from '../../components/ListingPage';

export const ProductPage = useCallback(() => {

  const cart_context = useContext(CartContext);
  if (!cart_context) {
    return <div>Error: Cart context not found</div>;
  }
  
  const { cartItemsArray, addToCart } = cart_context;

  return (
    <>
      <Header cartItemsCount={cartItemsArray.length}/>
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ListingPage 
            productsData={allProducts.products}
            addToCart={addToCart}
          />
        </div>
      </section>
    </>
  )
}, []);
