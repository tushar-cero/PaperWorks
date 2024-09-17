import React, { useState } from 'react';
import { ListingProps, Product } from '../../types';
import { FilterIcon } from '../../assets/svgicons';
import { ProductDescription } from '../ProductDescription';
import { sortProductsByPriceOrRating } from '../../utils/utilityFunctions';

export const ListingPage: React.FC<ListingProps> = (props) => {
  
  const { productsData, DisplayCard } = props;
  const [currentProductData, setCurrentProductData] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<string | null>(null); // For product description
  const [selectedSortOption, setSelectedSortOption] = useState<string>('Sort');

  const handleSelectedSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('sorting triggered', selectedSortOption);
    const newSortOption = e.target.value;
    setSelectedSortOption(newSortOption);
    let tempProducts: Product[] = [];
    switch (newSortOption) {
      case 'Price (high to low)':
        tempProducts = sortProductsByPriceOrRating(productsData, 'price', 'descending');
        break;
      case 'Price (low to high)':
        tempProducts = sortProductsByPriceOrRating(productsData, 'price', 'ascending');
        break;
      case 'Rating (high to low)':
        tempProducts = sortProductsByPriceOrRating(productsData, 'rating', 'descending');
        break;
      case 'Rating (low to high)':
        tempProducts = sortProductsByPriceOrRating(productsData, 'rating', 'ascending');
        break;
      default:
        tempProducts = [...productsData];
        break;
    }
    setCurrentProductData(tempProducts); 
  };

  return (
    <article className='flex gap-4 px-4 h-screen pt-[74px]'>
      <section className=''>
        <div className='flex justify-between items-center px-4 pb-4'>
          <p className='text-sm text-gray-500'>Products found: {productsData.length}</p>
          <div className="flex justify-start gap-1 items-start border border-gray-300 text-gray-900 font-sm py-1 px-2 rounded-lg">
            <FilterIcon/>
            <select 
              id="sortingFilter"
              value={selectedSortOption}
              onChange={handleSelectedSortOptionChange}
            >
              <option value="Sort">Sort</option>
              <option value="Price (high to low)">Price (high to low)</option>
              <option value="Price (low to high)">Price (low to high)</option>
              <option value="Rating (high to low)">Rating (high to low)</option>
              <option value="Rating (low to high)">Rating (low to high)</option>
            </select>
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-4 h-full overflow-scroll hideScrollBarCustom pb-6'>
          { ((productsData.length > 0) ? productsData : currentProductData).map((product) => 
            <DisplayCard key={product.id} product={product} setCurrentProduct={setCurrentProduct} />
          )}
        </div>
      </section>
      { currentProduct && <ProductDescription targetId={currentProduct} setCurrentProduct={setCurrentProduct} />}
    </article>
  )
};
