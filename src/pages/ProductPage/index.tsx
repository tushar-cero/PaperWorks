import React, {useContext} from 'react';
import Header from '../../components/Header';
import ListingPage from '../../components/ListingPage';
import allProducts from '../../locale/productData.json';
import { CartContext } from '../../App';

export const ProductPage = () => {

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
}
