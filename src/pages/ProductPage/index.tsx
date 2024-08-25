import React from 'react';
import allProducts from '../../locale/productData.json';
import { ListingPage } from '../../components/ListingPage';

export const ProductPage = () => {

  return (
    <section className="bg-white py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <ListingPage productsData={allProducts.products} />
      </div>
    </section>
    
  )
};
