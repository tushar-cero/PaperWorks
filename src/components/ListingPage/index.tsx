import React from 'react'
import ProductCard from '../ProductCard'
import { ListingProps } from '../../types';

const ListingPage: React.FC<ListingProps> = (props) => {
    const { productsData, handleAddtoCart } = props;
    return (
        <div className='mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4'>
            {productsData.map((product)=><ProductCard key={product.id} product={product} handleAddtoCart={handleAddtoCart}/>)}
        </div>
    )
}

export default ListingPage