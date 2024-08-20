// ----- Library Imports
import React, { useCallback } from 'react'

// ----- Utility Imports
import { ListingProps } from '../../types';

// ----- Component Imports
import ProductCard from '../ProductCard'

export const ListingPage: React.FC<ListingProps> = useCallback((props) => {
    const { productsData, addToCart } = props;
    return (
        <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            { productsData.map((product) => 
                <ProductCard key={product.id} product={product} addToCart={addToCart}/>
            )}
        </div>
    )
}, []);
