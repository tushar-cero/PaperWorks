import React from 'react';
import allProducts from '../../locale/productData.json';
import { ListingPage } from '../../components/ListingPage';
import { Favorite } from '../../components/Favorite';

export const ProductPage = () => {

  return (
    <section className="bg-white py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 flex justify-center items-center gap-4">
        <ListingPage productsData={allProducts.products} />
        <Favorite /> 
      </div>
    </section>
    
  )
};
