import React from 'react';
import allProducts from '../../locale/productData.json';

import { ListingPage } from '../../components/ListingPage';
import { ProductCard } from '../../components/ProductCards/Product';

export const ProductPage = () => {

  return (
    <section className="bg-white antialiased">
      <ListingPage productsData={allProducts.products} DisplayCard={ProductCard} />
    </section>
  )
};
