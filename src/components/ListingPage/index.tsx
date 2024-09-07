import React, { useState } from 'react';
import { ListingProps } from '../../types';
import { ProductDescription } from '../ProductDescription';

export const ListingPage: React.FC<ListingProps> = (props) => {
  
  const { productsData, DisplayCard } = props;
  const [currentProduct, setCurrentProduct] = useState<string | null>(null);

  return (
    <article className='flex gap-4 px-4 h-screen pt-20'>
      <section className='flex flex-wrap justify-center items-center gap-4 h-full overflow-scroll hideScrollBarCustom pb-6'>
        { productsData.map((product) => 
          <DisplayCard key={product.id} product={product} setCurrentProduct={setCurrentProduct} />
        )}
      </section>
      { currentProduct && <ProductDescription targetId={currentProduct} setCurrentProduct={setCurrentProduct} />}
    </article>
  )
};
