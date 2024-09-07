import React from 'react';
import { ListingProps } from '../../types';
import { ProductCard } from '../ProductCards/Product';

export const ListingPage: React.FC<ListingProps> = (props) => {
  const { productsData, DisplayCard } = props;
  return (
    <div className='flex flex-wrap justify-center items-center gap-4 w-fit'>
      { productsData.map((product) => 
          <DisplayCard key={product.id} product={product}/>
      )}
    </div>
  )
};
