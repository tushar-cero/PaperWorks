import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import allProducts from '../../locale/productData.json';
import { searchProductsByTag } from '../../utils/utilityFunctions';

import { ListingPage } from '../../components/ListingPage';
import { ProductCard } from '../../components/ProductCards/Product';

export const ProductPage = () => {

  const { searchTerm } = useSelector((state: RootState)=> state.product)
  const ProductList = searchProductsByTag(allProducts.products, searchTerm)

  return (
    <ListingPage productsData={ProductList} DisplayCard={ProductCard} />
  )
};

