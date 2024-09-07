import React from 'react';
import allProducts from '../../locale/productData.json';

import { ListingPage } from '../../components/ListingPage';
import { useSelector } from 'react-redux';
import { filterSimpleProductsByIds } from '../../utils/utilityFunctions';
import { RootState } from '../../store';
import { FavoriteCard } from '../../components/ProductCards/Favorite';

export const Favorite = () => {

  const { favoriteItemsArray } = useSelector((state: RootState) => state.favorite);
  const favoriteProductData = filterSimpleProductsByIds(favoriteItemsArray, allProducts.products);

  return (
    <ListingPage productsData={favoriteProductData} DisplayCard={FavoriteCard} />
  )
}
