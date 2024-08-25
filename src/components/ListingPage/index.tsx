import React from 'react';
import { ListingProps } from '../../types';
import { ProductCard } from '../ProductCard'

export const ListingPage: React.FC<ListingProps> = (props) => {
  const { productsData } = props;
  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      { productsData.map((product) => 
          <ProductCard key={product.id} product={product}/>
      )}
    </div>
  )
};
