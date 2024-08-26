import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { filterProductsByIds } from '../../utils/utilityFunctions';
import allProducts from '../../locale/productData.json';
import { ListingPage } from '../ListingPage';

export const Favorite = () => {

  const { favoriteItemsArray } = useSelector((state:RootState)=> state.favorite);
  const productsInCart = filterProductsByIds(favoriteItemsArray, allProducts.products);

  return (
    <section className='w-6/12'>
      <ListingPage productsData={productsInCart}/>
    </section>
  )
}
